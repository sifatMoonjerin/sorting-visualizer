import React, { useState } from 'react';
import './HeadContainer.css';
import Slider from 'react-input-slider';
import shuffle from '../../functions/shuffleFunction/shuffle';

const HeadContainer = ({heading, barNum, speedNum, changeSpeed, changeBarNum, changeArray}) => {
    const [speed, setSpeed] = useState({x:speedNum});
    const [bars, setBars] = useState({x:barNum});

    const handleShuffle = () => {
        changeBarNum(bars.x);
        changeSpeed(speed.x);
        changeArray(shuffle(bars.x));
    }

    return (
        <div className='headCon'>
            <h1>{heading}</h1>
            <div className='d-flex align-items-center'>
                <div className='d-flex flex-column'>
                    <div className='d-flex align-items-center justify-content-end'>
                        Speed
                        <Slider
                            axis="x"
                            x={speed.x}
                            xmin={25}
                            xmax={5}
                            onChange={({ x }) => setSpeed(speed => ({ ...speed, x }))}
                            styles={{
                                track: {
                                  margin: '10px 15px 10px 10px',
                                  width: '100px'
                                }
                            }}
                        />
                    </div>
                    
                    <div className='d-flex align-items-center justify-content-end'>
                        Bars
                        <Slider
                            axis="x"
                            x={bars.x}
                            xmin={50}
                            xmax={100}
                            onChange={({ x }) => setBars(bars => ({ ...bars, x }))}
                            styles={{
                                track: {
                                  margin: '10px 15px 10px 10px',
                                  width: '100px'
                                }
                            }}
                        />
                    </div>
                </div>
                <button 
                    disabled={heading === 'Sorting...'}
                    onClick={handleShuffle}
                    className='btn btn-danger'
                >Shuffle
                </button>
            </div>
            
        </div>
    );
};

export default HeadContainer;