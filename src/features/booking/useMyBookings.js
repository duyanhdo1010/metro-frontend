import { useQuery } from '@tanstack/react-query';
import { getMyBookings } from '../../services/apiBooking';

export function useMyBookings() {
  const {
    isLoading,
    data: myBookings,
    error
  } = useQuery({
    queryKey: ['myBookings'],
    queryFn: getMyBookings
  });
  return { isLoading, error, myBookings };
}
