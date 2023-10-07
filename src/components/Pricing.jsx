import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { StyledPricing } from '../styles/Pricing';
import { useGoogleSheetsCsvData } from '../hooks/useGoogleSheetsData';
import Price from './Price';

const PRICES_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRVxOPgVUOQSHVk-gV_wNFJ-_SxG3nI82JAL_4P-a19YZv4yqDAVFDKJQfyxkvMIc1MxYG89AQyujbD/pub?gid=0&single=true&output=csv";

const Pricing = (_props, ref) => {
    const pricesData = useGoogleSheetsCsvData(PRICES_URL);
    
    const [type, setType] = useState("Escaneo");
    const [location, setLocation] = useState("CABA");

    const price = pricesData?.find((p) => p?.type === type && p?.location === location)?.price;

    const [priceMainRef, priceInView] = useInView({
        threshold: 0.05,
        triggerOnce: true, 
        rootMargin: "200px 0px"
      });
    
    return (
      <StyledPricing ref={ref}>
        <h2>Tarifas</h2>
        <motion.div
          className="pricing-wrapper"
          ref={priceMainRef}
          initial={{
            y: 100,
            opacity: 0,
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
              onChange={(e) => setType(e.target.value)}
              name="type"
            >
              <optgroup label="Servicio">
                <option value="Escaneo">Escaneo</option>
                <option value="Dominio">Informe de Dominio</option>
                <option value="informeFull">Informe full</option>
              </optgroup>
            </select>
          </div>
          <div>
            <h3>Zona</h3>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              name="location"
            >
              <optgroup label="Zona">
                <option value="CABA">CABA</option>
                <option value="Otros">Otros</option>
              </optgroup>
            </select>
          </div>
          <div>
            <h3>Total</h3>
            <Price price={price} location={location} />
          </div>
        </motion.div>
        <div className="pricing-disclaimers">
          {type === "informeFull" && <h4>El informe full comprende:</h4>}
          {type !== "Dominio" && (
            <h4>
              <span>Escaneo computarizado: </span>Incluye revisión mecánica,
              diagnóstico con scanner, estructura general, prueba de manejo.
            </h4>
          )}
          {type !== "Escaneo" && (
            <h4>
              <span>Informe de dominio: </span>Incluye número de chasis y motor,
              prendas y embargos, inhibición para vender, usufructo o leasing,
              afectaciones para transferir.
            </h4>
          )}
        </div>
      </StyledPricing>
    );
}

export default React.forwardRef(Pricing);
