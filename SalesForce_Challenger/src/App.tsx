import React from 'react';
import './App.css';
import Home from './pages/home/Home.tsx';
import CadContato from './pages/cad_Contato/cadContato.tsx';
import Prod360 from './pages/produtos360/Product360.tsx';
import Cabecalho from './components/header/Cabecalho.tsx';
import Rodape from './components/footer/Rodape.tsx';
import LoginPage from './components/login/loginPage.tsx';

function App() {
    return (
        //codigos ja comentados para a mudança, caso precise a =valiar a pagina de login, no qual o import está comentada na pparte final do codigo.
       <>
         <Cabecalho title={''} />
         
         <div className='main-content'>
          <section id="home">
             <Home />
           </section>
           <section id="produtos360">
             <Prod360 />
           </section>
           <section id="cadContato">
             <CadContato />
           </section>
         </div>
         <div className="background-secondary"></div>
        <div className="background-tertiary"></div> 

         <Rodape />
       </>
    );
   }
   

export default App;

//import pagina de Login/Cadastro
    //<LoginPage/>