import React, { useState, useRef } from 'react';

import {GlobalStyles} from '../styles/GlobalStyles'
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Steps from './Steps';
import Services from './Services';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [bodyOverflowY, setBodyOverflowY] = useState("visible");
  const stepsRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const heroRef = useRef(null);

  return (
    <>
      <GlobalStyles overflowY={bodyOverflowY} />
      <Header
        setBodyOverflowY={setBodyOverflowY}
        ref={{
          heroRef,
          servicesRef,
          stepsRef, 
          pricingRef, 
          testimonialsRef
        }}
      />
      <Hero ref={heroRef}/>
      <About/>
      <Steps ref={stepsRef}/>
      <Services ref={servicesRef}/>
      <Pricing ref={pricingRef}/>
      <Testimonials ref={testimonialsRef}/>
      <Contact/>
      <Footer
        ref={{
          servicesRef,
          stepsRef, 
          pricingRef
        }}
      />
    </>
  );
}

export default App;
