import React, { useState, useEffect } from 'react';
import './Cabecalho.css';
import searchIcon from './assets/search-icon.svg';
import salesIcon from './assets/salesforce-256.png';
import loginIcon from './assets/account_avatar_people_profile_user_icon_123297.svg';

import menuIcon from './assets/cardapio.png';
import fechar from './assets/botao-fechar.png'
import { //importando React-route-dom, para a navegacao do site
    BrowserRouter as Router,
    Routes,
    Route, 
    Link 
   } from 'react-router-dom';
import LoginPage from '../login/loginPage';
import ColorSwitcher from '../switcher/ColorSwitcher';

interface ClearHeaderProps {
    title: string;
}

const ClearHeader: React.FC<ClearHeaderProps> = ({ title }) => {
    const [showSearch, setShowSearch] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    // Função para fechar a caixa lateral ao clicar fora dela
    const closeSidebarOnClickOutside = (e: MouseEvent) => {
        if (e.target === e.currentTarget) {
            setShowSidebar(false);
        }
    };

    useEffect(() => {
        if (showSidebar) {
            document.addEventListener('click', closeSidebarOnClickOutside);
        }
        return () => {
            document.removeEventListener('click', closeSidebarOnClickOutside);
        };
    }, [showSidebar]);

    return (
        <>
        <Router>
            <header className="clear-header">
                <button className="menu-button" onClick={() => setShowSidebar(!showSidebar)}>
                    <img src={menuIcon} alt="Ícone de Menu" className="menu-icon" />
                </button>
                <a href='home'><img src={salesIcon} alt='Icone SalesForce' className='sales-icon' /></a>
                
                <div className="header-content">
                    <div className='imgBlind'>
                        <ColorSwitcher />
                    </div>

                    <div className="search-login-section">
                        <button className="search-button" onClick={() => setShowSearch(!showSearch)}>
                            <img src={searchIcon} alt="Ícone de pesquisa" />
                        </button>
                        {showSearch && <input type="text" placeholder="Pesquisar..." className="search-input" />}
                        <div className="login-container">
                            <button className="login-button">
                            <p><Link to='/login' >Login</Link></p>
                                <img src={loginIcon} alt="Ícone de login" className="login-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            
            
     

        <Routes>
            <Route path="/login" element={<LoginPage/>} /> {/* Rota para a página de login */}
        </Routes>

            {showSidebar && (
                <div className={`sidebar ${showSidebar ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
                    <button className="close-sidebar-button" onClick={() => setShowSidebar(false)}>
                        <img src={fechar} alt='botao fechar'/>
                    </button>
                    <nav>
                    <a href='#home'><div className="sidebar-item">Home</div></a>
                    <a href='#sobre'><div className="sidebar-item">Sobre</div></a>
                    <a href='#produtos360'><div className="sidebar-item">Produtos</div></a>
                    <a href='#cadContato'><div className="sidebar-item">Cadastro Contato</div></a>
                
                    </nav>
                </div>
            )}
        </Router>
        </>
    );
};

export default ClearHeader;
