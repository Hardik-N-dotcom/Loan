import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Logoutbtn from '../components/Logoutbtn';
import { useNavigate } from 'react-router-dom';
import api from '../lib/axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get('/userinfo', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.user);
    } catch (error) {
      toast.error('Invalid or expired token');
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLoanClick = () => {
    navigate('/LoanApproval');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">Welcome to the Dashboard 🎉</h1>

        {user ? (
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
          <p className="text-gray-500">Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
