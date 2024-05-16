// app/login/page.tsx
'use client';
import { useState, useEffect } from 'react'
import { loginUser } from '@/services/apilogin';
import { User } from '../types/types';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Redireciona o usuário quando ele está definido e válido
    if (user) {
      window.location.href = '/admin'; // Use window.location.href para redirecionar
    }
  }, [user]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');  // Reset error message
    try {
      const authenticatedUser = await loginUser(username, password);
      if (authenticatedUser) {
        setUser(authenticatedUser); // Armazena o usuário no estado e deixa o useEffect cuidar do redirecionamento
      } else {
        setError('Invalid username or password');
      }
    } catch {
      setError('Login failed');
    }
  }

  return (
    <>
    <div className="login-page">
    <div className="container mx-auto p-4">
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
            className="border p-2"
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
            className="border p-2"
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2">
          Login
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>

    </div>
    
    </>
  )
}
