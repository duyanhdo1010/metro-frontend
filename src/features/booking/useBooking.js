import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services/apiBooking';

export function useBooking(inputBookingId) {
  const {
    isLoading,
    data: booking,
    error
  } = useQuery({
    queryKey: ['booking'],
    queryFn: () => getBooking(inputBookingId)
  });

  return { isLoading, error, booking };
}
