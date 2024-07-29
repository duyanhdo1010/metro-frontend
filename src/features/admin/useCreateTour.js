import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createTour } from '../../services/apiTours';

export default function useCreateTour() {
  const queryClient = useQueryClient();
  const { mutate: create, isLoading } = useMutation({
    mutationFn: (formData) => createTour(formData),
    onSuccess: () => {
      toast.success('Tạo tour mới thành công');
      queryClient.invalidateQueries({ queryKey: ['tours'] }); // cập nhật lại danh sách tours
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });
  return { create, isLoading };
}
