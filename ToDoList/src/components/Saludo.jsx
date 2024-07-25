import React from 'react';
import '../styles/Saludo.css'; // Importa estilos específicos del componente si los tienes

function Saludo(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}

export default Saludo;
