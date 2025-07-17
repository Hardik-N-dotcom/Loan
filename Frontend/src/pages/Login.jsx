import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import api from '../lib/axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if(!email || !password){
      toast.error("please fill all the details")
      return
    }
    try {
      const res = await api.post("/login", { email, password });
      console.log(res.data);
      
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        toast.success("Login successful");
        navigate('/dashboard');
      }
      else{
      toast.error(res.data.message|| "login unsuccessful")
      }
    } catch (error) {
      console.log(error);
      toast.error("Login unsuccessful");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-white to-blue-100">
      <Navbar />
      <div className="flex justify-center items-center mt-10 px-4">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">🔐 Login</h2>
          <form onSubmit={handlesubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition font-semibold"
            >
              Login
            </button>
            <div className="text-center mt-4 text-sm text-gray-600">
              Don’t have an account?{' '}
              <span
                onClick={() => navigate('/signup')}
                className="text-purple-600 cursor-pointer font-medium hover:underline"
              >
                Sign Up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
