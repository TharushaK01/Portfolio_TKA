import React from 'react'
import { Link } from 'react-router-dom';
import './LogoFolio.css';
import Manulak from '../../../assets/Manulak.webp';

const projects = [
  {
    img: Manulak,
  },

];

const LogoFolio = () => {
 return (
    <div className="folio-detail">
      <h1>Logo Folio</h1>
      <p>More details about logo projects will go here.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default LogoFolio