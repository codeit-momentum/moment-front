import { UploadType, UploadParams } from '../../types/moment';
import { checkDateRange } from '../../utils/moment';
import useGetBucketDetail from '../queries/bucketList/useGetBucketDetail';
import usePatchBucketUpload from '../queries/bucketList/usePatchBucketUpload';
import useGetMomentDetail from '../queries/moment/useGetMomentDetail';
import usePatchMomentUpload from '../queries/moment/usePatchMomentUpload';

interface UploadMutationParams {
  variables: UploadParams;
  onSuccess: () => void;
  onError: (error: Error) => void;
}

const useUpload = (variant: UploadType, id: string | undefined) => {
  const {
    data: momentData,
    isError: momentError,
    isLoading: momentLoading,
  } = useGetMomentDetail(variant === 'moment' ? id : undefined);

  const {
    data: bucketData,
    isError: bucketError,
    isLoading: bucketLoading,
  } = useGetBucketDetail(variant === 'bucket' ? id : undefined);

  const { mutate: patchMomentUpload } = usePatchMomentUpload();
  const { mutate: patchBucketUpload } = usePatchBucketUpload();

  if (variant === 'moment') {
    return {
      data: momentData?.moment,

      // 완료된 모멘트인 경우, 오늘 날짜가 시작 날짜와 끝 날짜 사이가 아닌 경우 에러 리턴
      isError:
        momentError ||
        momentData?.moment.isCompleted ||
        (momentData &&
          checkDateRange(
            momentData.moment.startDate,
            momentData.moment.endDate,
          )),
      isLoading: momentLoading,
      patchUpload: ({ variables, onSuccess, onError }: UploadMutationParams) =>
        patchMomentUpload(variables, { onSuccess, onError }),
    };
  }
  return {
    data: bucketData?.bucket,

    // 도전 중인 버킷인 경우, 완료된 버킷인 경우, 반복형 버킷인 경우 에러 리턴
    isError:
      bucketError ||
      bucketData?.bucket.isChallenging ||
      bucketData?.bucket.isCompleted ||
      bucketData?.bucket.type === 'REPEAT',
    isLoading: bucketLoading,
    patchUpload: ({ variables, onSuccess, onError }: UploadMutationParams) =>
      patchBucketUpload(variables, { onSuccess, onError }),
  };
};

export default useUpload;
