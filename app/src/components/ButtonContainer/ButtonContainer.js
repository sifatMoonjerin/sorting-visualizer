import React from 'react';
import insertionSort from '../../functions/sortFunctions/insertionSort';
import selectionSort from '../../functions/sortFunctions/selectionSort';
import bubbleSort from '../../functions/sortFunctions/bubbleSort';
import mergeSort from '../../functions/sortFunctions/mergeSort';
import quickSort from '../../functions/sortFunctions/quickSort';


const ButtonContainer = ({array, sortArr}) => {
    const handleSort = steps => {
        for(let i = 0; i < steps.length; i++){
            setTimeout(()=>sortArr(steps[i]), i*25);
        }
    }

    return (
        <div>
            <button 
                onClick={()=>handleSort(insertionSort(array))}
            >Insertion Sort
            </button>
            <button 
                onClick={()=>handleSort(selectionSort(array))}
            >Selection Sort
            </button>
            <button 
                onClick={()=>handleSort(bubbleSort(array))}
            >Bubble Sort
            </button>
            <button 
                onClick={()=>handleSort(mergeSort(array))}
            >Merge Sort
            </button>
            <button 
                onClick={()=>handleSort(quickSort(array))}
            >Quick Sort
            </button>
        </div>
    );
};

export default ButtonContainer;