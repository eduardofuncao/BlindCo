"use client";
import Rodape from './components/Footer/Rodape';
import Cabecalho from './components/Header/Cabecalho';
import CookiePopup from './components/cookies/CookiePopup'
import Home from './pages/home/Home';
import Prod360 from './pages/produtos360/Product360';
import { //importando React-route-dom, para a navegacao do site
  BrowserRouter as Router,
  Routes,
  Route, 
  Link 
 } from 'react-router-dom';
import './page.css'
import LoginPage from './components/login/loginPage';






function App() {
  return (
    <>
      <CookiePopup />
    </>
  );
}

export default App;