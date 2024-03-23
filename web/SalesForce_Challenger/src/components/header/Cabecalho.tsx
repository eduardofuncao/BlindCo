import React, { useState } from 'react';
import './Cabecalho.css';
import searchIcon from './assets/search-icon.svg';
import salesIcon from './assets/salesforce-256.png';
import loginIcon from './assets/account_avatar_people_profile_user_icon_123297.svg';

interface ClearHeaderProps {
    title: string;
}

const ClearHeader: React.FC<ClearHeaderProps> = ({ title }) => {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <header className="clear-header">
            <a href='home'><img src={salesIcon} alt='Icone SalesForce' className='sales-icon' /></a>
            <div className="header-links">
                <a href=''><p>Cadastro para contato</p></a>
                <a href='produto'><p>Custom 360</p></a>
                <a><p>Suporte</p></a>
                <a><p>Organograma</p></a>
            </div>
            <div className="header-content">
                <div className="search-login-section">
                    <button className="search-button" onClick={() => setShowSearch(!showSearch)}>
                        <img src={searchIcon} alt="Ícone de pesquisa" />
                    </button>
                    {showSearch && <input type="text" placeholder="Pesquisar..." className="search-input" />}
                    <div className="login-container">
                        <button className="login-button">
                            Login
                            <img src={loginIcon} alt="Ícone de login" className="login-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ClearHeader;
