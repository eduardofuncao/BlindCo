//Essa pagina necessita de route para sua total funcionalidade, então para vizualiza-la é necessário coloca-la manualmente no arquivo App.tsx
"use client";
import React, { useState } from 'react';
import './loginPage.css'; 

const LoginPage = () => {
 const [activeTab, setActiveTab] = useState('login'); 
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState(''); 
 const [confirmPassword, setConfirmPassword] = useState(''); 
 const [email, setEmail] = useState(''); 
 const [phone, setPhone] = useState(''); 
 const [role, setRole] = useState(''); 
 const [company, setCompany] = useState(''); 
 const [firstName, setFirstName] = useState(''); 
 const [lastName, setLastName] = useState(''); 

 const handleLogin = () => {
    //adicionar a lógica para autenticar o usuário
    console.log('Login:', username, password);
 };

 const handleSignup = () => {
    //adicionar a lógica para criar uma nova conta
    console.log('Signup:', firstName, lastName, username, password, email, phone, role, company);
 };

 return (
  <>
    <div className="login-page">
      <div className="tabs">
        <button className={activeTab === 'login' ? 'active' : ''} onClick={() => setActiveTab('login')}>Login</button>
        <button className={activeTab === 'signup' ? 'active' : ''} onClick={() => setActiveTab('signup')}>Cadastro</button>
      </div>
      <div className="content">
        {activeTab === 'login' ? (
          <div className="login-form">
            <input type="text" placeholder="Nome de usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Entrar</button>
          </div>
        ) : (
          <div className="signup-form">
            <input type="text" placeholder="Primeiro Nome" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Sobrenome" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="text" placeholder="Nome de usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirmar Senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder="Cargo" value={role} onChange={(e) => setRole(e.target.value)} />
            <input type="text" placeholder="Empresa" value={company} onChange={(e) => setCompany(e.target.value)} />
            <button onClick={handleSignup}>Cadastrar</button>
          </div>
        )}
      </div>
      
    </div>
    
    </>
 );
};

export default LoginPage;
