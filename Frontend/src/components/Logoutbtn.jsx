import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Logoutbtn = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logout successfully');
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition"
    >
      🔒 Logout
    </button>
  );
};

export default Logoutbtn;
