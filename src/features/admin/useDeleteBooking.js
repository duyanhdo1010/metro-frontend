import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteApi } from '../../services/apiBooking';
import toast from 'react-hot-toast';

export default function useDeleteBooking() {
  const QueryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading } = useMutation({
    mutationFn: (bookingId) => deleteApi(bookingId),
    onSuccess: () => {
      toast.success('Xoá Booking thành công');
      QueryClient.invalidateQueries({ queryKey: ['bookings'] }); //cập nhật lại tất cả users
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });
  return { deleteBooking, isLoading };
}
