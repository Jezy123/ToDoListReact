
import '../styles/Tarjeta.css'; // Importa estilos específicos del componente si los tienes
import React, { useState } from 'react';

function Tarjeta({ title, content, index, removeTarjeta }) {
  
  const handleAddClickRemove = () => {
    removeTarjeta(index)
  }

  return (
    <div className="tarjeta">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleAddClickRemove}>remove</button>
    </div>
  );
}

export default Tarjeta;