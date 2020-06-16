import React from 'react';
import './ButtonContainer.css';
import insertionSort from '../../functions/sortFunctions/insertionSort';
import selectionSort from '../../functions/sortFunctions/selectionSort';
import bubbleSort from '../../functions/sortFunctions/bubbleSort';
import mergeSort from '../../functions/sortFunctions/mergeSort';
import quickSort from '../../functions/sortFunctions/quickSort';


const ButtonContainer = ({array, changeHeading, sortArr}) => {
    const handleSort = steps => {
        changeHeading('Sorting...');
        for(let i = 0; i < steps.length; i++){
            setTimeout(() => sortArr(steps[i]), i*25);
        }
        setTimeout(() => changeHeading('Sorted!'), steps.length*25);
    }

    return (
        <div className='btnCon'>
            <button 
                className='btn btn-primary'
                onClick={()=>handleSort(insertionSort(array))}
            >Insertion Sort
            </button>
            <button 
                className='btn btn-primary'
                onClick={()=>handleSort(selectionSort(array))}
            >Selection Sort
            </button>
            <button
                className='btn btn-primary' 
                onClick={()=>handleSort(bubbleSort(array))}
            >Bubble Sort
            </button>
            <button
                className='btn btn-primary' 
                onClick={()=>handleSort(mergeSort(array))}
            >Merge Sort
            </button>
            <button
                className='btn btn-primary' 
                onClick={()=>handleSort(quickSort(array))}
            >Quick Sort
            </button>
        </div>
    );
};

export default ButtonContainer;