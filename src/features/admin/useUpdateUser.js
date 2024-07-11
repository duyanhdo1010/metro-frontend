import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../../services/apiUsers';
import toast from 'react-hot-toast';

export default function useUpdateUser() {
  const QueryClient = useQueryClient();
  const { mutate: edit, isLoading } = useMutation({
    // Lưu ý là mutation function chỉ nhận 1 đối số duy nhất nên phải nhét vào object
    mutationFn: ({ userId, data }) => updateUser(userId, data),
    onSuccess: () => {
      toast.success('Cập nhật thành công');
      QueryClient.invalidateQueries({ queryKey: ['users'] }); //cập nhật lại tất cả users
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });
  return { edit, isLoading };
}
