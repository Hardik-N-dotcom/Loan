import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("token"); // or "user" if you store user info

  const handleLogout = () => {
    localStorage.removeItem("token"); // clear auth token
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md w-full py-4 px-6 flex justify-between items-center">
      <div
        className="text-xl font-bold text-purple-600 cursor-pointer"
        onClick={() => navigate('/')}
      >
        SmartLoan
      </div>
      <div className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-purple-600 transition">
          Home
        </Link>

        {!user ? (
          <>
            <Link to="/signup" className="text-gray-700 hover:text-purple-600 transition">
              Signup
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-purple-600 transition">
              Login
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="text-gray-700 hover:text-purple-600 transition">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-red-500 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
