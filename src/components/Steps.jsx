import React from 'react';

import { StyledSteps } from '../styles/Steps';
import {Step} from './SingleStep';
import { stepsWhatsapp } from '../svg/stepsWhatsapp.js';
import { stepsScanner } from '../svg/stepsScanner.js';
import { stepsReport } from '../svg/stepsReport.js';

export const Steps = () => {
    return (
        <StyledSteps>
            <div id="steps-img"/>
            <div id="steps-process">
                <h2>Cómo funciona</h2>
                <div className="steps-wrapper">
                    <Step
                        num="1"
                        icon={stepsWhatsapp()}
                        title="Comunicate y te asesoramos"
                        body="Coordina tu turno previamente con el vendedor y agendamos una visita."
                    />
                    <Step
                        num="2"
                        icon={stepsScanner()}
                        title="Vamos al domicilio del auto"
                        body="Uno de nostros, Omar o Hector, iremos a visitar el auto que preseleccionaste y nos pondremos a realizar el DIAGNOSTICO EXTREMO."
                    />
                    <Step
                        num="3"
                        icon={stepsReport()}
                        title="Te enviamos el informe final"
                        body="Te informamos detalladamente de todas las anomalías que se pudieran encontrar y estimamos los costos aproximados para que puedas negociar el precio con el vendedor."                    
                    />
                </div>
            </div>
        </StyledSteps>
    )
}
