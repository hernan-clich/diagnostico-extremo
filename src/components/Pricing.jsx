import React, { useState, useEffect } from 'react';

import { precios } from '../precios';
import { Button } from './Button.js';
import { ButtonDisabled } from './ButtonDisabled.js';
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
                        <option value="Escaneo-Dominio">Informe full</option>
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
                    {Number.isInteger(price) ? <span>$ {price} </span>: <p>{price}</p>}
                </div>
            </div>
            <div className="pricing-disclaimers">
                {type === "Escaneo-Dominio" && <h4>El informe full contiene:</h4>}
                {type !== "Dominio" && <h4><span>Escaneo computarizado: </span>Revisión mecánica, diagnóstico con scanner, estructura general, prueba de manejo.</h4>}
                {type !== "Escaneo" && <h4><span>Informe de dominio: </span>Número de chasis y motor, prendas y embargos, inhibición para vender, usufructo o leasing, afectaciones para transferir.</h4>}
                {(location === "CABA") || (location !== "CABA" && type === "Dominio") ? 
                    <Button href="/" onClick={handleClick}>Contratar</Button> :
                    <ButtonDisabled>Contratar</ButtonDisabled>
                }
            </div>
            
        </StyledPricing>
    )
}

export default React.forwardRef(Pricing);
