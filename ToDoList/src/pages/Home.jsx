import React, { useState } from 'react';
import Tarjeta from '../components/Tarjeta'; // Asegúrate de que la ruta sea correcta
import EscribirTarjeta from '../components/EscribirTarjeta'; // Asegúrate de que la ruta sea correcta
import Cookies from 'js-cookie';
import { useEffect } from 'react';



function Home() {
    const [tarjetas, setTarjetas] = useState(() => {
        const savedTarjetas = Cookies.get('tarjetas');
        return savedTarjetas ? JSON.parse(savedTarjetas) : [];
    });

    useEffect(() => {
        
        Cookies.set('tarjetas', JSON.stringify(tarjetas), { expires: 7 });
    }, [tarjetas]);

    const handleAddTarjeta = (nuevaTarjeta) => {
        setTarjetas([...tarjetas, nuevaTarjeta]);
    };

    const handleRemoveTarjeta = (index) => {
        const tarjetasNuevas = tarjetas.filter((_, i) => i !== index);
        setTarjetas(tarjetasNuevas);
    };

    return (
        
        <div className='container'>
            
            <EscribirTarjeta addTarjeta={handleAddTarjeta} />

            <div className="tarjetasContainer">
                {tarjetas.map((tarjeta, index) => (
                    <Tarjeta
                        key={index}
                        index={index}
                        title={tarjeta.title}
                        content={tarjeta.content} 
                        removeTarjeta={handleRemoveTarjeta}                        
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;

