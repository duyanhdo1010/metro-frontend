import { useQuery } from '@tanstack/react-query';
import { getTour } from '../../services/apiTours';
import { useParams } from 'react-router-dom';

export function useTour(inputTourId) {
  // lấy tourId từ params
  const params = useParams();
  const tourId = inputTourId || params.tourId;
  const {
    isLoading,
    data: tour,
    error
  } = useQuery({
    queryKey: ['tour'],
    queryFn: () => getTour(tourId)
  });

  return { isLoading, error, tour };
}
