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

export async function deleteTour(tourId) {
  try {
    const response = await axios.delete(`http://localhost:3000/api/v1/tours/${tourId}`, {
      withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
    });
    return response.data;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}

export async function updateTour(tourId, formData) {
  try {
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    const response = await axios.patch(`http://localhost:3000/api/v1/tours/${tourId}`, formData, {
      withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
    });
    return response.data.data;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}

export async function createTour(formData) {
  try {
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    const response = await axios.post(`http://localhost:3000/api/v1/tours/`, formData, {
      withCredentials: true // cho phép gửi thông tin xác thực như cookie hoặc header
    });
    return response.data.data;
  } catch (err) {
    console.log(err.response ? err.response.data.message : err.message);
    throw err;
  }
}
