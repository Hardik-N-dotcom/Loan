import React from 'react';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Logoutbtn from '../components/Logoutbtn';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading } = useUser();

  const handleLoanClick = () => {
    navigate('/LoanApproval');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">Welcome to the Dashboard 🎉</h1>

        {loading ? (
          <p className="text-gray-500">Loading user data...</p>
        ) : user ? (
          <>
            <div className="mb-6">
              <p className="text-lg text-gray-700"><strong>Name:</strong> {user.name}</p>
              <p className="text-lg text-gray-700"><strong>Email:</strong> {user.email}</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleLoanClick}
                className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                🚀 Access Loan Approval
              </button>

              <Logoutbtn />
            </div>
          </>
        ) : (
          <p className="text-gray-500">Please log in to access your dashboard.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
