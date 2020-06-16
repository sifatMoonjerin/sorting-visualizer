import React from 'react';
import './Bar.css';

const Bar = ({hue, light}) => {
    return (
        <div className='bar' style={{'backgroundColor': `hsl(${hue},100%,${light}%)`}}>
        </div>
    );
};

export default Bar;