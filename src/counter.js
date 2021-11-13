import React from 'react';
import Tarjeta from './sergioT.jpeg';
import Count from './Count';
export default function Counter() {
  return (
    <div className="counter">
      <img src={Tarjeta} alt="Tarjeta hecha por sergio" className="tarjeta" />
      <Count />
    </div>
  );
}
