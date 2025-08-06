import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../lib/axios';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const fetchUser = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await api.get('/userinfo', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user);
    } catch (error) {
      console.log("User not authenticated or token expired.");
      localStorage.removeItem('token');
      setToken(null);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = (newToken, userData) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  const value = {
    user,
    loading,
    token,
    login,
    logout,
    refetchUser: fetchUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};