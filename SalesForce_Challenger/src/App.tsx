import React from 'react';
import './App.css';
import Home from './pages/home/Home.tsx';
import CadContato from './pages/cad_Contato/cadContato.tsx';
import Prod360 from './pages/produtos360/Product360.tsx';
import Cabecalho from './components/header/Cabecalho.tsx';
import Rodape from './components/footer/Rodape.tsx';

function App() {
 return (
  <>
  <Cabecalho title={''}/>
  <div className='main-content'>
   <Home/>
  </div>
  <Rodape/>
    
 </>
);
};

export default App;
