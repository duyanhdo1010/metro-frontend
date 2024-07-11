import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  // Check login and user status
  const { isLogin, user } = useSelector((state) => state.auth);
  // If there is NO authenticated user, redirect to login page
  useEffect(function () {
    if (!isLogin && !user) {
      navigate('/login');
    } else if (isLogin && user.role === 'admin') {
      navigate('/admin/dashboard');
    }
  });

  // If there is a user, render the app (children)
  if (isLogin && user) return children;
}

export default ProtectedRoutes;
