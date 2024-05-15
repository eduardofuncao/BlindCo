"use client";
import React from 'react';
import './Rodape.css';
import SendClicks from '../sendClicks/SendClicks';


const Footer: React.FC = () => {
 return (
    <footer className="footer">
      <p>&copy; Todos os direitos reservados a Artur Fiorindo rm553481| Eduardo Função rm553362 | Jhoe Hashimoto rm553831  <br></br> Link GitHub: <a href='https://github.com/eduardofuncao/BlindCo'>https://github.com/eduardofuncao/BlindCo</a></p>
      <SendClicks></SendClicks>
    </footer>
 );
};

export default Footer;