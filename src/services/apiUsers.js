import axios from 'axios';

export async function getAllUsers() {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/users`, {
      // bên backend phải có cors với credentials: true
      withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
    });
    return response.data.data.users;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}

export async function getUser(userId) {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/users/${userId}`, {
      withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
    });
    return response.data.data.user;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}

export async function updateUser(userId, data) {
  try {
    const response = await axios.patch(`http://localhost:3000/api/v1/users/${userId}`, data, {
      withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
    });
    return response.data.data.user;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}

export async function deleteUser(userId) {
  try {
    const response = await axios.delete(`http://localhost:3000/api/v1/users/${userId}`, {
      withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
    });
    return response.data;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}
