"use client";
import React, { useState, useEffect } from 'react';
import './Cabecalho.css';
import searchIcon from './assets/search-icon.svg';
import salesIcon from './assets/salesforce-256.png';
import loginIcon from './assets/account_avatar_people_profile_user_icon_123297.svg';
import Image from 'next/image';
import menuIcon from './assets/cardapio.png';
import fechar from './assets/botao-fechar.png'
import LoginPage from '../login/loginPage';
import ColorSwitcher from '../switcher/ColorSwitcher';
import { //importando React-route-dom, para a navegacao do site
    BrowserRouter as Router,
    Routes,
    Route, 
    Link 
   } from 'react-router-dom';
import Home from '@/app/pages/home/Home';
import Prod360 from '@/app/pages/produtos360/Product360';
import Sobre from '../sobre/Sobre';

interface ClearHeaderProps {
    title: string;
}

const ClearHeader: React.FC<ClearHeaderProps> = ({ title }) => {
    const [showSearch, setShowSearch] = useState(false);

  

  

    return (
        <>
        <Router>
        
            <header className="clear-header">
                <Link to='/'><Image src={salesIcon} alt='Icone SalesForce' className='sales-icon' /></Link>
                
                <div className='link-list'>
                    <ul>
                        <li><Link to='/login' className="nav-link"><b>Login</b></Link></li>
                        <li><Link to='/sobre' className="nav-link"><b>Sobre</b></Link></li>

                        <li><Link to='/produtos' className="nav-link"><b>Produtos</b></Link></li>
                    </ul>
                </div>
                
                
                <div className="header-content">
                    <div className='imgBlind'>
                        <ColorSwitcher />
                    </div>

                    <div className="search-login-section">
                        <button className="search-button" onClick={() => setShowSearch(!showSearch)}>
                            <Image src={searchIcon} alt="Ícone de pesquisa" />
                        </button>
                        {showSearch && <input type="text" placeholder="Pesquisar..." className="search-input" />}
                        <div className="login-container">
                            <button className="login-button">
                            <a>Login</a>
                                <Image src={loginIcon} alt="Ícone de login" className="login-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <hr></hr>
            
            
            
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<Prod360 />} />
            <Route path="/login" element={<LoginPage />} /> {/* Rota para a página de login */}
          </Routes>
        </div>
      </Router>

        
        </>
    );
};

export default ClearHeader;
