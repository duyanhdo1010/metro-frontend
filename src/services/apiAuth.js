import axios from 'axios';
import toast from 'react-hot-toast';

export async function signUp(newUserData) {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/users/signup', newUserData);
    return response.data;
  } catch (err) {
    toast.error('Đã có lỗi xảy ra');
    console.log(err.response.data.message);
    return null;
  }
}

export async function login(email, password) {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/v1/users/login',
      {
        email,
        password
      },
      {
        // bên backend phải có cors với credentials: true
        withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
      }
    );
    return response.data;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}

export async function logout() {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/users/logout', {
      withCredentials: true // để api gửi lại cookie mới
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
