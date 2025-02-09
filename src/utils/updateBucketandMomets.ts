export const updateBucketAndMoments = async (
  bucketId: string,
  moments: any[],
  frequency: string,
  updateBucketChallenge: (params: { id: string }) => Promise<any>,
  createMoments: (params: { bucketId: string; payload: any }) => Promise<any>,
) => {
  try {
    await updateBucketChallenge({ id: bucketId }); // ✅ `mutate` 대신 `mutateAsync`를 사용해야 함
    return await createMoments({
      bucketId,
      payload: {
        startDate: moments[0].startDate,
        endDate: moments[moments.length - 1].endDate,
        moments,
        frequency,
      },
    });
  } catch (error) {
    console.error('❌ 오류 발생:', error);
    throw error;
  }
};
