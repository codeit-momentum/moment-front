import { useLocation, useParams } from 'react-router-dom';

const useBucketId = () => {
  const { id: paramId } = useParams();
  const location = useLocation();
  const storedBucketId = sessionStorage.getItem('bucketId');
  return paramId || location.state?.bucketId || storedBucketId;
};

export default useBucketId;
