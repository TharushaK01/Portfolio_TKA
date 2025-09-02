import React from 'react'
import { Link } from 'react-router-dom';

const WebFolio = () => {
return (
    <div className="folio-detail">
      <h1>Logo Folio</h1>
      <p>More details about logo projects will go here.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default WebFolio