import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { StyledSteps } from '../styles/Steps';
import { Step } from './SingleStep';
import { stepsWhatsapp } from '../svg/stepsWhatsapp.js';
import { stepsScanner } from '../svg/stepsScanner.js';
import { stepsReport } from '../svg/stepsReport.js';

const Steps = (props, ref) => {

    const stepsBgImgUrl = {
        backgroundImage: 'url(./assets/steps-car.png)'
    };
    
    const [stepsWrapperRef, stepsInView] = useInView({
        threshold: 0.15,
        triggerOnce: true, 
        rootMargin: "300px 0px"
      });

    return (
        <StyledSteps ref={ref}>
            <motion.div id="steps-img"
                style={stepsInView ? stepsBgImgUrl : {}}
                animate={{opacity: stepsInView ? 1 : 0}}
            ></motion.div>
            <div id="steps-process" ref={stepsWrapperRef}>
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

export default React.forwardRef(Steps);