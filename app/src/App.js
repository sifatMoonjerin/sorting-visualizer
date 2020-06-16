import React, { useState, useEffect } from 'react';
import './App.css';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';
import BarContainer from './components/BarContainer/BarContainer';
import shuffle from './functions/shuffleFunction/shuffle';
import HeadContainer from './components/HeadContainer/HeadContainer';

function App() {
  const [array, setArray] = useState([]);
  const [barNum, setBarNum] = useState(100);
  const [hue, setHue] = useState(240);
  const [heading, setHeading] = useState('Unsorted')

  useEffect(()=>{
    setArray(shuffle(barNum))
  }, [])
  
  return (
    <div className="App">
      <HeadContainer heading={heading}/>
      <BarContainer array={array} hue={hue}/>
      <ButtonContainer 
        array={array}
        changeHeading={h => setHeading(h)}  
        sortArr={arr => setArray(arr)}
      />
    </div>
  );
}

export default App;
