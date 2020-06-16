import React from 'react';
import './ButtonContainer.css';
import insertionSort from '../../functions/sortFunctions/insertionSort';
import selectionSort from '../../functions/sortFunctions/selectionSort';
import bubbleSort from '../../functions/sortFunctions/bubbleSort';
import mergeSort from '../../functions/sortFunctions/mergeSort';
import quickSort from '../../functions/sortFunctions/quickSort';


const ButtonContainer = ({array, heading, speed, changeHeading, sortArr}) => {
    const handleSort = steps => {
        changeHeading('Sorting...');
        for(let i = 0; i < steps.length; i++){
            setTimeout(() => sortArr(steps[i]), i*speed);
        }
        setTimeout(() => changeHeading('Sorted!'), steps.length*speed);
    }

    return (
        <div className='btnCon'>
            <button 
                disabled={heading !== 'Unsorted'}
                className='btn btn-success'
                onClick={()=>handleSort(insertionSort(array))}
            >Insertion Sort
            </button>
            <button 
                disabled={heading !== 'Unsorted'}
                className='btn btn-success'
                onClick={()=>handleSort(selectionSort(array))}
            >Selection Sort
            </button>
            <button
                disabled={heading !== 'Unsorted'}
                className='btn btn-success' 
                onClick={()=>handleSort(bubbleSort(array))}
            >Bubble Sort
            </button>
            <button
                disabled={heading !== 'Unsorted'}
                className='btn btn-success' 
                onClick={()=>handleSort(mergeSort(array))}
            >Merge Sort
            </button>
            <button
                disabled={heading !== 'Unsorted'}
                className='btn btn-success' 
                onClick={()=>handleSort(quickSort(array))}
            >Quick Sort
            </button>
        </div>
    );
};

export default ButtonContainer;