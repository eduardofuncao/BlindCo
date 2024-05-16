'use client';
import React, { useState, useEffect } from 'react';
import { loginUser } from '@/services/apilogin';
import { User } from '../types/types';
import './login.css';
import Image from 'next/image';
import loginImg from '../assets/salesforce-login.png';



const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Redireciona o usuário quando ele está definido e válido
    if (user) {
      window.location.href = '/admin'; 
    }
  }, [user]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(''); //error message
    try {
      const authenticatedUser = await loginUser(username, password);
      if (authenticatedUser) {
        setUser(authenticatedUser); // Armazena o usuário no estado enquanto o useEffect redireciona
      } else {
        setError('Invalid username or password');
      }
    } catch {
      setError('Login failed');
    }
  };

  return (
    <div className="login-page">
      <Image src={loginImg} alt='logo salesforce' className='logo-login'/>
      <div className="tabs">
        <button className="active">Login</button>
        {/* Adicionar aqui outros tabs*/}
      </div>
      <div className="content">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="mt-4">
            Login
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;