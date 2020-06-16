import React from 'react';
import './HeadContainer.css';
import shuffle from '../../functions/shuffleFunction/shuffle';

const HeadContainer = ({heading, barNum, changeArray}) => {
    return (
        <div className='headCon'>
            <h1>{heading}</h1>
            <div className='d-flex align-items-center'>
                <button 
                    disabled={heading === 'Sorting...'}
                    onClick={()=>changeArray(shuffle(barNum))}
                    className='btn btn-danger'
                >Shuffle
                </button>
            </div>
            
        </div>
    );
};

export default HeadContainer;