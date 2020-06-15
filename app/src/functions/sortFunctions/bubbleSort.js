const bubbleSort = arr => {
    let steps = [];
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 1; j < arr.length-i; j++){
            if(arr[j-1] > arr[j]){
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            }
            
            steps.push([...arr]);
        }
    }
    return steps;
}

export default bubbleSort;