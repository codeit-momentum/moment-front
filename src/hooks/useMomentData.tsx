import { useLocation } from 'react-router-dom';
import { CreateMomentResponse } from '../types/moment/createMomentTypes';

const useMomentData = (bucketId: string): CreateMomentResponse | null => {
  const location = useLocation();
  const storedMomentData = sessionStorage.getItem(`momentData-${bucketId}`);

  if (storedMomentData) {
    return JSON.parse(storedMomentData);
  } else if (location.state) {
    return location.state;
  }

  return null;
};

export default useMomentData;
