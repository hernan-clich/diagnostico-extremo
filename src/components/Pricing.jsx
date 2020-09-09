import React, { useState, useEffect } from 'react';

import { precios } from '../precios';
import { Button } from './Button.js';
import { StyledPricing } from '../styles/Pricing';

const Pricing = (props, ref) => {
    
    const [price, setPrice] = useState("");
    const [type, setType] = useState("Escaneo");
    const [location, setLocation] = useState("CABA");

    useEffect(() => {
        const priceSetter = (typ, loc) => {
            if(loc === "Otros" && typ !== "Dominio"){
                setPrice(precios.Otros);
            } else {
                if(typ === "Escaneo") setPrice(precios.zonas[loc]);
                if(typ === "Dominio") setPrice(precios.Dominio);
                if(typ === "Escaneo-Dominio") setPrice(precios.zonas[loc] + precios.Dominio);
            }
        }

        priceSetter(type, location);

    }, [type, location]);

    const handleClick = e => {
        e.preventDefault();
        console.log(price);
    }

    return (
        <StyledPricing ref={ref}>
            <h2>Tarifas</h2>
            <div className="pricing-wrapper">
                <div>
                    <h3>Servicio</h3>
                    <select 
                        value={type}
                        onChange={e => setType(e.target.value)}
                        name="type"
                    >
                        <option value="Escaneo">Escaneo</option>
                        <option value="Dominio">Dominio</option>
                        <option value="Escaneo-Dominio">Escaneo-Dominio</option>
                    </select>
                </div>
                <div>
                    <h3>Zona</h3>
                    <select 
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        name="location"
                    >
                        {Object.keys(precios.zonas).map((zona, ind) => (
                            <option key={ind} value={zona}>{zona}</option>    
                        ))}
                        <option value="Otros">Otros</option>
                    </select>
                </div>
                <div>
                    <h3>Total</h3>
                    <span>{Number.isInteger(price) ? '$ '+price : price}</span>
                </div>
            </div>
            <Button secondary href="/" onClick={handleClick}>Contratar</Button>
        </StyledPricing>
    )
}

export default React.forwardRef(Pricing);
