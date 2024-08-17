import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createBooking } from '../../services/apiBooking';
import { useNavigate, useParams } from 'react-router-dom';

export default function useCreateBooking() {
  const params = useParams();
  const navigate = useNavigate();
  let tourID = params?.tourId;
  const { mutate: create, isLoading } = useMutation({
    mutationFn: (data) => createBooking(data, tourID),
    onSuccess: () => {
      toast.success('Đặt tour thành công');
      navigate('/me/bookings');
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });
  return { create, isLoading };
}
