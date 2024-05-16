
import React from 'react';
import './Home.css';
import img_mainText from './assets/LandingImage.webp';
import { Link } from 'react-router-dom';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="contentHome">
        <div className="inner-content">
          <h1 className="title"><u>Experimente</u> o Salesforce Starter Suite <b>gratuitamente</b>.</h1>
          <p className="supporting-text">
          Reúna marketing, vendas e atendimento em um único aplicativo. 
          Experimente o Salesforce Starter Suite hoje mesmo. Não há nada para instalar. <i>Não</i> é necessário cartão de crédito.
          </p>
          <div className="buttons">
            <a href="https://www.salesforce.com/br/form/signup/salesforce-starter/" className="buttonHome1">
              Inicie teste gratuito
            </a>
            <a href="https://www.salesforce.com/br/form/starter/overview-demo/" className="buttonHome2">
              Assista à demo
            </a>
          </div>
        </div>
      </div>
      <div className="imageLanding">
        <Image src={img_mainText} alt="AI Assistant" />
      </div>
    </div>
  );
};

export default Home;
