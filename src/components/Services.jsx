import React from 'react';

import { StyledServices } from '../styles/Services';
import { Service } from './SingleService';


const Services = (props, ref) => {
    return (
        <StyledServices ref={ref}>
            <h2>Qué observamos</h2>
            <div id="serv-wrapper">
                <Service
                    img="url(./assets/serv-checkup.png)"
                    title="Revisión mecánica"
                    body="Revisamos motor, tren delantero, frenos, embrague, caja, tren trasero, amortiguadores, pérdida de fluidos, estado de cubiertas y llantas, y mucho más."
                />
                <Service
                    img="url(./assets/serv-scanner.png)"
                    title="Diagnóstico con scanner"
                    body="Detectamos averías de motor, historial de fallas, km adulterados, ABS, caja automática, funcionamiento de airbags, climatización, dirección asistida, computadora, sensores, y mucho más."
                />
                <Service
                    img="url(./assets/serv-structure.png)"
                    title="Estructura general"
                    body="Chequeamos estado de chapa y pintura, choques mal reparados, partes repintadas, granizo, inundados, interior, aperturas, chasis, y mucho más."                    
                />
                <Service
                    img="url(./assets/serv-wheel.png)"
                    title="Prueba de manejo"
                    body="Prestamos atención a la reacción y potencia del motor, posibles tironeos, ruidos anormales de suspensión, dirección, semiejes, funcionamiento de la caja y mucho más."
                />
            </div>
        </StyledServices>
    )
}

export default React.forwardRef(Services);