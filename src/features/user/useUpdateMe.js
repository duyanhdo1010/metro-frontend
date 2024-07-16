import toast from 'react-hot-toast';
import { updateMe as update } from '../../services/apiUsers';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { updateUser } from '../authentication/authSlice';

export default function useUpdateMe() {
  const dispatch = useDispatch();

  // mình lưu ở redux nên là sẽ gửi api, nếu thành công thì update ở redux
  const { mutate: updateMe, isLoading } = useMutation({
    mutationFn: (data) => update(data),
    onSuccess: (data) => {
      // data này là user được update mới được api gửi lại
      dispatch(updateUser(data));
      toast.success('Cập nhật thành công');
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });
  return { updateMe, isLoading };
}
