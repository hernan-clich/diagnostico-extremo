import React, {useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';

import { StyledTestimonials } from '../styles/Testimonials';
import { Testimonial } from './SingleTestimonial';


const Testimonials = (props, ref) => {
    const[revealed, setRevealed] = useState("");

    const [testiWrapperRef, testiInView] = useInView({
        threshold: 0.15,
        triggerOnce: true, 
        rootMargin: "400px 0px"
      });

      useEffect(() => {
          if(testiInView) setRevealed("testi-revealed")
      }, [testiInView]);

    return (
        <StyledTestimonials ref={ref} className={revealed}>
            <div id="testi-bg" className={revealed}/>
            <h2>Qué dicen nuestros clientes</h2>
            <div id="testi-wrapper" ref={testiWrapperRef}>
                <Testimonial
                    author="Fernando Parra" 
                    review="Excelente atención! Revisaron el auto a full. Me hicieron una devolución muy completa y me dieron todos los consejos. Me inspiró mucha confianza."
                />
                <Testimonial
                    author="guido yacaruso" 
                    review="Hacen un muy buen trabajo , mucha puntualidad, son muy detallistas Omar un genio mucha dedicación  y profesionalismo, te salvan de futuros problemas, los super recomiendo!!!"
                />
                <Testimonial
                    author="Vanina brandt" 
                    review="Excelente !! ,el técnico realizó  un chequeo general y súper detallado ,observo detalles que nunca se nos hubiese ocurrido mirar del vehículo que compramos  y nos dejó varias recomendaciones de gran ayuda !  Muy conformes con la atención ,sin duda volveríamos a solicitar su servicio !"
                />
                <Testimonial
                    author="Gabi arias" 
                    review="Los llamé para chequear el estado real de un automóvil que me compré y fue excelente la revisión que le hicieron, 1 hora casi chequeando cada detalle del auto y con un scaneo integral. Me dieron el informe y compré tranquilo. Valió la pena cada peso invertido en contratarlos. Muy profesionales. Gracias."
                />
            </div>
        </StyledTestimonials>
    )
}

export default React.forwardRef(Testimonials);