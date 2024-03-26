import React from 'react';
import './Home.css';
import img_mainText from '../../assets/Home.png'

function Home() {
 return (
  <>
  
  <div className='main-content'>
    <div className="sales-pop-description">
        <h1>SalesPop</h1>
          <p>Uma aplicação de acessibilidade para o portal da SalesForce</p>
        <h2>Descrição da proposta</h2>
          <p>
          De alguns anos para cá, quando entramos em um site a primeira coisa vemos é uma solicitação para aceitar ou não os cookies.<br/> 
          Isso acaba sendo inconveniente, quando tudo que você quer fazer, é seguir para o conteúdo principal do site. Por vezes aceitamos sem pensar só para que tudo seja feito mais rapido. Embora irritante, esse fluxo veio para ficar, é necessário e está em conformidade com a LGPD. Pensando em acessibilidade, nós propomos uma forma de tirar proveito dessa "obrigação". Junto com o pop up de aceite dos cookies do site, vamos incluir um rápido questionário opcional para pessoas com deficiência. Com isso, além de gerarmos uma base de dados sobre acessibilidade mais sólida, também vamos poder customizar o site com base nessas escolhas.
          </p>
      </div>
  </div>
 
  
  
 </>
);
};

export default Home;