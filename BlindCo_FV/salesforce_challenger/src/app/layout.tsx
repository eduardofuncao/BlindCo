import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cabecalho from "./components/Header/Cabecalho";
import Rodape from "./components/Footer/Rodape";
import { //importando React-route-dom, para a navegacao do site
  BrowserRouter as Router,
  Routes,
  Route, 
  Link 
 } from 'react-router-dom';
import './page.css'
import LoginPage from './components/login/loginPage';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlindCo",
  description: "Site SalesForce com implementação do BlinCo",
};

export default function RootLayout({children}:RootLayoutProps){
  return (
    <html lang="pt-br">
    
       
      <body className={inter.className}>

      <Cabecalho title={''}/>
      
        
        {children}

      <Rodape/> 
        

      
      </body>
    </html>
  );
}
