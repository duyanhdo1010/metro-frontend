import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateBooking } from '../../services/apiBooking';

export default function useUpdateBooking() {
  const QueryClient = useQueryClient();
  const { mutate: edit, isLoading } = useMutation({
    // Lưu ý là mutation function chỉ nhận 1 đối số duy nhất nên phải nhét vào object
    mutationFn: ({ BookingId, data }) => updateBooking(BookingId, data),
    onSuccess: () => {
      toast.success('Cập nhật thành công');
      QueryClient.invalidateQueries({ queryKey: ['bookings'] }); //cập nhật lại tất cả users
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });
  return { edit, isLoading };
}
