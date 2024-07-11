import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setUser } from './authSlice';

export default function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useMutation bởi vì sẽ có thay đổi trên máy chủ
  const { mutate: login, isLoading } = useMutation({
    // phải phá huỷ ra object bởi vì data từ form xuống dưới dạng object
    mutationFn: ({ email, password }) => loginApi(email, password),
    onSuccess: (data) => {
      toast.success('Đăng nhập thành công');
      dispatch(setUser(data.data.user));
      if (data.data.user.role === 'user') {
        navigate('/tours');
      } else if (data.data.user.role === 'admin') {
        navigate('/admin/dashboard');
      }
    },
    onError: (err) => {
      console.log('Error', err.message);
      toast.error('Email hoặc mật khẩu không đúng!');
    }
  });

  return { login, isLoading };
}
