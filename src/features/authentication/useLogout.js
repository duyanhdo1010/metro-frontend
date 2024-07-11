/* eslint-disable no-unused-vars */
import { useMutation } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logoutUser } from './authSlice';

export default function useLogout() {
  const dispatch = useDispatch();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: (data) => {
      toast.success('Đăng xuất thành công');
      dispatch(logoutUser());
    },
    onError: (err) => {
      toast.error('Đã có lỗi xảy ra');
      console.log(err);
    }
  });

  return { logout, isLoading };
}
