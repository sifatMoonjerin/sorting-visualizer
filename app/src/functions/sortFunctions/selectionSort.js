const selectionSort = arr => {
    const steps = [];
    for(let i = 0; i < arr.length-1; i++){
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
            steps.push([...arr]);
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
        steps.push([...arr])
    }
    return steps;
}

export default selectionSort;