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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TourDetails from './pages/TourDetails';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import ProtectedRoutes from './ui/ProtectedRoutes';
import AdminAppLayout from './ui/AdminAppLayout';
import AdminRoutes from './ui/AdminRoutes';
import AdminDashboard from './features/admin/AdminDashboard';
import AdminTours from './features/admin/AdminTours';
import AdminUsers from './features/admin/AdminUsers';

//khoi tao query Client
const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0
  }
});

function App() {
  return (
    // provide data cho toàn bộ ứng dụng
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* không tự động mở dev tool lên */}
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              {/* Các trang cần AppLayout sẽ để trông đây */}
              <Route element={<AppLayout />}>
                {/* index === path='/' */}
                <Route index element={<HomePage />} />
                <Route path="/tours" element={<Tour />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/tours/:tourId" element={<TourDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                {/* Cần đăng nhập */}
                <Route element={<ProtectedRoutes />}>
                  <Route path="/bookings" element={<Booking />} />
                  <Route path="/me" element={<User />} />
                </Route>
              </Route>
              {/* Dành cho Admin */}
              <Route
                element={
                  <AdminRoutes>
                    <AdminAppLayout />
                  </AdminRoutes>
                }>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/tours" element={<AdminTours />} />
                <Route path="/admin/users" element={<AdminUsers />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
          {/* gutter là gap giữa các thông báo */}
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: '0.8rem' }}
            toastOptions={{
              success: {
                duration: 3000
              },
              error: {
                duration: 5000
              },
              style: {
                fontSize: '1.6rem',
                maxWidth: '500px',
                padding: '1.6rem 2.4rem',
                backgroundColor: 'var(--color-teal-0)',
                color: 'var(--color-teal-9)'
              }
            }}
          />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
