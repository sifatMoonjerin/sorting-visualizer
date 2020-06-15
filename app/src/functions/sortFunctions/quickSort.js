const quickSort = unsortedArray => {
    let steps = [];

    const quick = (arr, start, end) => {
        if(start < end){
            const pi = partition(arr, start, end);
    
            quick(arr, start, pi-1);
            quick(arr, pi+1, end);
        }
    }

    const partition = (arr, start, end) => {
        let pivot = arr[end];
    
        let pi = start-1;
    
        for(let i = start; i < end; i++){
            if(arr[i] < pivot){
                pi++;
                [arr[i], arr[pi]] = [arr[pi], arr[i]];
            }
            steps.push([...arr]);
        }
    
        pi++;
    
        [arr[pi], arr[end]] = [arr[end], arr[pi]];
        return pi;
    
    }

    quick(unsortedArray, 0, unsortedArray.length-1);

    return steps;
}

export default quickSort;