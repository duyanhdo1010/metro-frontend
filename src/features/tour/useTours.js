import { useQuery } from '@tanstack/react-query';
import { getAllTours } from '../../services/apiTours';

export function useTours() {
  const {
    isLoading,
    data: tours,
    error
  } = useQuery({
    queryKey: ['tours'],
    queryFn: getAllTours
  });
  return { isLoading, error, tours };
}
