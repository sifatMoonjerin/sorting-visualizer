import React from 'react';
import './HeadContainer.css';

const HeadContainer = ({heading}) => {
    return (
        <div className='headCon'>
            <h1>{heading}</h1>
            <div>
                <button className='btn btn-secondary'>Refresh</button>
            </div>
            
        </div>
    );
};

export default HeadContainer;