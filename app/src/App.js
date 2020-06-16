 
import React, { useState, useEffect } from 'react';
import './App.css';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';
import BarContainer from './components/BarContainer/BarContainer';
import shuffle from './functions/shuffleFunction/shuffle';
import HeadContainer from './components/HeadContainer/HeadContainer';

function App() {
  const [array, setArray] = useState([]);
  const [barNum, setBarNum] = useState(75);
  const [hue, setHue] = useState(240);
  const [speed, setSpeed] = useState(25);
  const [heading, setHeading] = useState('Unsorted');

  useEffect(()=>{
    setArray(shuffle(barNum))
  }, [])
  
  return (
    <div className="App">
      <HeadContainer
        barNum={barNum}
        speedNum={speed}
        changeSpeed={num => setSpeed(num)}
        changeBarNum={num => setBarNum(num)}
        changeArray={arr => {
          setArray(arr)
          setHeading('Unsorted')
        }} 
        heading={heading}
      />
      <BarContainer 
        array={array}
        hue={hue}
      />
      <ButtonContainer 
        array={array}
        heading={heading}
        speed={speed}
        changeHeading={h => setHeading(h)}  
        sortArr={arr => setArray(arr)}
      />
    </div>
  );
}

export default App;