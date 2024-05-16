import React from 'react';
import './CookieConcient.css';
import Image from 'next/image';
import BlindCo from '../assets/BlindCo.svg'




const Page: React.FC = () => {
  return (
    <div>
        <div>
            <h1 className="h1-Cookies"><u>Acessibilidade</u></h1>
        </div>
      <div className="containerCookies">
        <div className="cookies-item">
          <Image src={BlindCo} alt="Logo BlinCo" className='imgBlindCo' />

        </div>
        <div className="main-content-cookies">
        <div className="cookies-content">
            <p>Este site foi cuidadosamente projetado levando em consideração a acessibilidade para pessoas com daltonismo.
                Utilizamos cores contrastantes e evitamos depender exclusivamente de cores para transmitir informações importantes.
                Todas as imagens têm texto descritivo para garantir que o conteúdo seja compreensivel para todos os usuários,
                Independentemente de sua capacidade visual.
                <br></br>
                Nosso site conta com os 3 principais tipos de filtros para Daltonismo que são:
                <br></br>
                <br></br>
            </p>
            
                <ul>
                    <li>Protanopia</li>
                    <li>Deuteranopia</li>
                    <li>Tritanopia</li>
                </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

