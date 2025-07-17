import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';
import api from '../lib/axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validations
    if (name.trim().length < 3) {
      return toast.error("Full name must be at least 3 characters.");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email address.");
    }
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters.");
    }

    try {
      const res = await api.post('/signup', {
        name,
        email,
        password,
      });

      toast.success(res.data.message || 'Signup successful');

      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || 'Signup failed. Please try again.'
      );
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-start">
        <div className="w-full max-w-md mt-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6 tracking-tight">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')}
              className="text-purple-600 hover:underline cursor-pointer font-medium"
            >
              Login here
            </span>
          </p>
        </div>

        <p className="mt-8 text-xs text-gray-500 text-center px-4">
          SmartLoan helps you manage finances with instant EMI calculators & approval decisions.
        </p>
      </div>
    </div>
  );
};

export default Signup;
