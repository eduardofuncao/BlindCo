"use client";
import React, { useState, useEffect } from 'react';
import { loginUser } from '@/services/apilogin'; // Verifique se o caminho está correto
import { getUsers } from '@/services/apiusuarios';
import { saveUser } from '@/services/apiregister';
import { User } from '../types/types'; // Verifique se o caminho está correto
import Image from 'next/image';
import loginImg from '../assets/salesforce-login.png'; // Verifique se o caminho está correto
import './login.css';

interface LoginPageProps {
  onLoginSuccess: (username: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userCounter, setUserCounter] = useState(0);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
      setUserCounter(usersData.length);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
  
    try {
      const authenticatedUser = await loginUser(username, password);
  
      if (authenticatedUser) {
        localStorage.setItem('username', authenticatedUser.username);
        window.location.href = '/';
      } else {
        setError('Nome de usuário ou senha incorretos');
      }
    } catch {
      setError('Erro ao fazer login');
    }
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    try {
      if (password !== confirmPassword) {
        setError('As senhas não coincidem');
        return;
      }

      const newUserId = userCounter + 1;

      await saveUser({
        id: newUserId.toString(),
        username,
        password,
        firstName,
        lastName,
        email,
        phone,
        role,
        company
      });

      window.location.href = '/login';
    } catch (error) {
      setError('Erro ao cadastrar usuário');
    }
  };

  return (
    <div className="login-page">
      <Image src={loginImg} alt="Salesforce logo" className="logo-login" />
      <div className="tabs">
        <button className={isLoginTab ? 'active' : ''} onClick={() => setIsLoginTab(true)}>Login</button>
        <button className={!isLoginTab ? 'active' : ''} onClick={() => setIsLoginTab(false)}>Cadastro</button>
      </div>
      <div className="content">
        {isLoginTab ? (
          <>
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
            </form>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">Cadastro</h1>
            <form onSubmit={handleRegister}>
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
                <label htmlFor="firstName">Nome</label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="lastName">Sobrenome</label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="confirmPassword">Confirmar Senha</label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="phone">Telefone</label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="role">Cargo</label>
                <input
                  id="role"
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="company">Empresa</label>
                <input
                  id="company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="mt-4">
                Cadastrar
              </button>
            </form>
          </>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
