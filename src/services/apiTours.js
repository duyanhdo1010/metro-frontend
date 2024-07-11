import axios from 'axios';

export async function getAllTours() {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/tours`, {
      // bên backend phải có cors với credentials: true
      withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
    });
    return response.data.data.tours;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}

export async function getTour(tourId) {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/tours/${tourId}`, {
      // bên backend phải có cors với credentials: true
      withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
    });
    return response.data.data.tour;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}
