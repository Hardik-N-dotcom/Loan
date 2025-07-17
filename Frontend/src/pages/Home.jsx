import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

import api from '../lib/axios';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const res = await api.get('/userinfo', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user);
    } catch (error) {
      console.log("User not authenticated or token expired.");
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-purple-100">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
          Welcome to <span className="text-purple-600">SmartLoan</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl">
          {user
            ? `Hello, ${user.name}. Manage your loan applications, calculate EMIs, and explore personalized financial services.`
            : "Sign up to check your loan eligibility, calculate EMI, and receive instant approval decisions with our smart loan system."}
        </p>
        <div className="mt-8 space-x-4">
          {user ? (
            <button
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
            >
              Go to Dashboard
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate('/signup')}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-24 px-6 lg:px-20 py-10 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why SmartLoan?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg shadow-lg border bg-purple-50 hover:bg-purple-100 transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Instant Loan Eligibility</h3>
            <p className="text-gray-600">Check if you're eligible in seconds with our real-time algorithm.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg border bg-purple-50 hover:bg-purple-100 transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">EMI Calculator</h3>
            <p className="text-gray-600">Accurate EMI calculations help you plan your finances effortlessly.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg border bg-purple-50 hover:bg-purple-100 transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Your data is protected with industry-standard encryption and safety.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="bg-purple-700 text-white text-center py-16 mt-24 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Your Smart Loan Journey Today</h2>
        <p className="max-w-xl mx-auto mb-6 text-lg">Sign up now to access your personalized dashboard, get fast approvals, and manage your finances better.</p>
        <button
          onClick={() => navigate(user ? '/dashboard' : '/signup')}
          className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-purple-100 transition"
        >
          {user ? 'Go to Dashboard' : 'Get Started Now'}
        </button>
      </div>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} SmartLoan. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
