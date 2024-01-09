import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface RouteGuardProps {
  children: ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const user = sessionStorage.getItem('user'); // Pobranie danych użytkownika z sesji

  if (!user) {
    // Jeśli użytkownik nie jest zalogowany, przekieruj na stronę logowania
    return <Navigate to="/login" />;
  }

  // Jeśli użytkownik jest zalogowany, wyrenderuj komponent dziecka (np. Profile)
  return <>{children}</>;
};

export default RouteGuard;
