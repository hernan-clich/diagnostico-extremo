import React from 'react';

import {GlobalStyles} from '../styles/GlobalStyles'
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Steps } from './Steps';
import { Services } from './Services';
import { Pricing } from './Pricing';

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
    </>
  );
}

export default App;
