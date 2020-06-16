import React from 'react';
import Bar from '../Bar/Bar';
import './BarContainer.css';

const BarContainer = ({array, hue}) => {
    return (
        <div className='barContainer'>
            {
                array.map(light => <Bar light={light} hue={hue}/>)
            }
        </div>
    );
};

export default BarContainer;