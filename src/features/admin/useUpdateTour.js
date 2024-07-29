import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateTour } from '../../services/apiTours';

export default function useUpdateTour() {
  const QueryClient = useQueryClient();
  const { mutate: edit, isLoading } = useMutation({
    // Lưu ý là mutation function chỉ nhận 1 đối số duy nhất nên phải nhét vào object
    mutationFn: ({ tourId, formData }) => updateTour(tourId, formData),
    onSuccess: () => {
      toast.success('Cập nhật tour thành công');
      QueryClient.invalidateQueries({ queryKey: ['tours'] }); //cập nhật lại tất cả users
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });
  return { edit, isLoading };
}
