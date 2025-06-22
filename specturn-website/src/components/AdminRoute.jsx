import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function AdminRoute({ children }) {
  const { currentUser, isOwner } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (!isOwner) {
    return <Navigate to="/" replace />;
  }

  return children;
}

