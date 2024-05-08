import React from 'react';
import './App.css';
import Home from './pages/home/Home.tsx';
import CadContato from './pages/cad_Contato/cadContato.tsx';
import Prod360 from './pages/produtos360/Product360.tsx';
import Cabecalho from './components/header/Cabecalho.tsx';
import Rodape from './components/footer/Rodape.tsx';
import LoginPage from './components/login/loginPage.tsx';
import Members from './components/nomes/Nome.tsx';
import Sobre from './components/sobre/Sobre.tsx';
import CookiePopup from './components/cookies/CookiePopup.jsx'
import SendClicks from './components/sendClicks/SendClicks.tsx';


function App() {
    return (
        <>
        
          <Cabecalho title={''} />
          
            <div className='main-content'>
          <section id="home">
             <Home />
           </section>
           <section id='sobre'>
             <Sobre/>
           </section>
           <section id="produtos360">
             <Prod360 />
           </section>
           <section id="cadContato">
             <CadContato />
           </section>
         </div>
        <div className="background-secondary"></div>
        <div className='background-tertiary'></div>
        <div className='background-4'></div>

        <CookiePopup/>

         <Rodape />
         
       </>
    );
   }

export default App;