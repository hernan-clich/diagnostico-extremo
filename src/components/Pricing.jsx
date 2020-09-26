import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { precios } from '../precios';
import { Button } from './Button.js';
import { ButtonDisabled } from './ButtonDisabled.js';
import { StyledPricing } from '../styles/Pricing';

const Pricing = (props, ref) => {
    
    const [price, setPrice] = useState("");
    const [type, setType] = useState("Escaneo");
    const [location, setLocation] = useState("CABA");
    const [mpLink, setMpLink] = useState(precios.links["inspeccion"]);

    const [priceMainRef, priceInView] = useInView({
        threshold: 0.05,
        triggerOnce: true, 
        rootMargin: "200px 0px"
      });

    useEffect(() => {
        const priceSetter = (typ, loc) => {
            if(loc === "Otros" && typ !== "Dominio") {
                setPrice(precios.Otros);
            } else {
                if(typ === "Escaneo") {
                    setPrice(precios.zonas[loc]);
                    setMpLink(precios.links[typ]);
                }
                if(typ === "Dominio") {
                    setPrice(precios.Dominio);
                    setMpLink(precios.links[typ]);
                }
                if(typ === "informeFull") {
                    setPrice(precios.zonas[loc] + precios.Dominio + 1);
                    setMpLink(precios.links[typ]);
                }
            }
        }

        priceSetter(type, location);

    }, [type, location]);
    
    return (
        <StyledPricing ref={ref}>
            <h2>Tarifas</h2>
            <motion.div 
                className="pricing-wrapper"
                ref={priceMainRef}
                initial={{
                    y: 100,
                    opacity: 0
                }}
                animate={{
                    y: priceInView ? 0 : 200,
                    opacity: priceInView ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 30 }}
            >
                <div>
                    <h3>Servicio</h3>
                    <select 
                        value={type}
                        onChange={e => setType(e.target.value)}
                        name="type"
                    >
                        <option value="Escaneo">Escaneo</option>
                        <option value="Dominio">Dominio</option>
                        <option value="informeFull">Informe full</option>
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
                    {Number.isInteger(price) ? <span>$ {price} </span>: <p>{price}</p>
                        }
                </div>
            </motion.div>
            <div className="pricing-disclaimers">
                {type === "informeFull" && <h4>El informe full comprende:</h4>}
                {type !== "Dominio" && <h4><span>Escaneo computarizado: </span>Incluye revisión mecánica, diagnóstico con scanner, estructura general, prueba de manejo.</h4>}
                {type !== "Escaneo" && <h4><span>Informe de dominio: </span>Incluye número de chasis y motor, prendas y embargos, inhibición para vender, usufructo o leasing, afectaciones para transferir.</h4>}
                {(location === "CABA") || (location === "Otros" && type === "Dominio") ? 
                    <Button as="a" href={mpLink} rel="external noopener noreferrer" target="_blank">Contratar</Button> :
                    <ButtonDisabled as="a">Contratar</ButtonDisabled>
                }
            </div>
            
        </StyledPricing>
    )
}

export default React.forwardRef(Pricing);
