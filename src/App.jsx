import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import GlobalStyles from './styles/GlobalStyles';
import Tour from './pages/Tour';
import Booking from './pages/Booking';
import User from './pages/User';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {/* Các trang cần AppLayout sẽ để trông đây */}
          <Route element={<AppLayout />}>
            {/* index === path='/' */}
            <Route index element={<HomePage />} />
            <Route path="/tours" element={<Tour />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/me" element={<User />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
