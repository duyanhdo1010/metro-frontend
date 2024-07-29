import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTour as deleteApi } from '../../services/apiTours';
import toast from 'react-hot-toast';

export default function useDeleteTour() {
  const QueryClient = useQueryClient();
  const { mutate: deleteTour, isLoading } = useMutation({
    mutationFn: (tourId) => deleteApi(tourId),
    onSuccess: () => {
      toast.success('Khoá Tour thành công');
      QueryClient.invalidateQueries({ queryKey: ['tours'] }); //cập nhật lại tất cả users
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });
  return { deleteTour, isLoading };
}
