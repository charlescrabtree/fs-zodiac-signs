import React from 'react';
import { zodiac } from '../../data.js';
import './Main.css';
import backgroundImage from '../../zodiac_background.png';
import ZodiacCard from '../Zodiac/Zodiac.js';

export default function Main() {
  return <main style={{ backgroundImage: `url(${backgroundImage})` }}>
    {zodiac.map((item) => (
      <ZodiacCard key={item.name} {...item} />
    ))}
  </main>;
}
