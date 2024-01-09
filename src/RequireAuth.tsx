import React from 'react';
import { Navigate } from 'react-router-dom';

interface RequireAuthProps {
  children: React.ReactElement;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const user = sessionStorage.getItem('user');

  if (!user) {
    // Jeśli użytkownik nie jest zalogowany, przekieruj na stronę logowania
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
