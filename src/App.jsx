import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import LoginPage from './pages/LoginPage';
// Vistas de usuario
import UserDashboard from './pages/user/Dashboard';
import UserGuaranteePage from './pages/user/GuaranteePage';
import UserRefundPage from './pages/user/RefundPage';
import UserAuctionPage from './pages/user/AuctionPage';
import UserHistoryPage from './pages/user/HistoryPage';
// Vistas de administrador
import AdminDashboard from './pages/admin/Dashboard';
import AdminValidatePage from './pages/admin/ValidatePage';
import AdminAuctionPage from './pages/admin/AuctionPage';
import AdminRefundPage from './pages/admin/RefundPage';
import AdminUserPage from './pages/admin/UserPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas protegidas para usuarios */}
      <Route element={<PrivateRoute requiredRole="user" />}>
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/guarantee" element={<UserGuaranteePage />} />
        <Route path="/user/refund" element={<UserRefundPage />} />
        <Route path="/user/auction" element={<UserAuctionPage />} />
        <Route path="/user/history" element={<UserHistoryPage />} />
      </Route>

      {/* Rutas protegidas para administradores */}
      <Route element={<PrivateRoute requiredRole="admin" />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/validate" element={<AdminValidatePage />} />
        <Route path="/admin/auction" element={<AdminAuctionPage />} />
        <Route path="/admin/refund" element={<AdminRefundPage />} />
        <Route path="/admin/users" element={<AdminUserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
