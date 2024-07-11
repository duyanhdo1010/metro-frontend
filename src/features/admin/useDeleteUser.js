import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser as deleteApi } from '../../services/apiUsers';
import toast from 'react-hot-toast';

export default function useDeleteUser() {
  const QueryClient = useQueryClient();
  const { mutate: deleteUser, isLoading } = useMutation({
    mutationFn: (userId) => deleteApi(userId),
    onSuccess: () => {
      toast.success('Khoá người dùng thành công');
      QueryClient.invalidateQueries({ queryKey: ['users'] }); //cập nhật lại tất cả users
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });
  return { deleteUser, isLoading };
}
