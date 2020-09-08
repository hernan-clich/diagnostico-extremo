import React from 'react';

import {GlobalStyles} from '../styles/GlobalStyles'
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Steps } from './Steps';
import { Services } from './Services';
import { Pricing } from './Pricing';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import { Footer } from './Footer';

function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Hero/>
      <About/>
      <Steps/>
      <Services/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
