import React from 'react';
import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg'
//FiArrowRight nome do icone
import {FiArrowRight} from 'react-icons/fi'
//Link não carregar nada do 0, diminuiu o fluxo de transferencia ;
import { Link } from 'react-router-dom';  // no lugar do ancora "<a></a> " coloca <Link> e troca o href por to

function Landing() {
    return (
    <div id="page-landing">
      <div className="content-wrapper">
      <img src={logoImg} alt ="Happy"/>
      
      <main>
        <h1> Leve felicidade para o mundo</h1>
        <p> Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <div className ="location">
        <strong>Brasília</strong>
        <span>Distrito Federal</span>
      </div>

      <Link to="/app" className="enter-app">
        <FiArrowRight size ={26} color = "rgba(0, 0, 0, 0.6)" /> 
      </Link>
    </div>
  </div>
    );
}

export default Landing;