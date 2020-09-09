import React from 'react';

import { StyledTestimonials } from '../styles/Testimonials';
import { Testimonial } from './SingleTestimonial';


const Testimonials = (props, ref) => {
    return (
        <StyledTestimonials ref={ref}>
            <h2>Qué dicen nuestros clientes</h2>
            <div id="testi-wrapper">
                <Testimonial
                    author="cervece41" 
                    review="Necesitaba comprar un auto usado y tenía a mis dos finalistas, un Clio y un Gol. Los llamé para que me ayuden a elegir cual de los dos era el que más me convenía. Escanearon ambos y descubrieron que el Gol había sido repintado, había tenido un choque y posiblemente tenía los km adulterados. Los técnicos son súper profesionales y no dan vueltas. Absolutamente recomendado."
                />
                <Testimonial
                    author="guido yacaruso" 
                    review="Hacen un muy buen trabajo , mucha puntualidad, son muy detallistas Omar un genio mucha dedicación  y profesionalismo, te salvan de futuros problemas, los super recomiendo!!!"
                />
                <Testimonial
                    author="Lucila Gimenez" 
                    review="Super contenta con el servicio, me quería comprar mi primer auto y mi papá me los recomendó! Apenás llamé, me asesoraron y coordinamos para que revisen el auto  antes de comprarlo! Me salvaron porque tenía varias fallas que jamas me hubiera dado cuenta! Despues seguí buscando y me escanearon otro auto que por suerte estaba impecable! Ahora esperando que termine la cuarentena para andar con mi Clio :)"
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