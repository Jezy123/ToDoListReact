import React, { useState } from 'react';
import '../styles/EscribirTarjeta.css'; // Importa estilos específicos del componente si los tienes

function EscribirTarjeta({addTarjeta}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddClick = () => {
        addTarjeta({ title, content });
        setTitle('');
        setContent('');
 

    }

  return (
    <div className="escribirTarjeta">
        <h3>Escribir tarjeta</h3>
        <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} value={title}></input>
        <input type="text" id="content" onChange={(e) => setContent(e.target.value)} value={content}></input>
        <button onClick={handleAddClick}>add</button>
    </div>

  );
}

export default EscribirTarjeta;