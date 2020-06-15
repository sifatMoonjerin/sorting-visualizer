const insertionSort = arr => {
    const steps = [];

    for(let i = 1; i < arr.length; i++){
        let j = i;
        while(arr[j] < arr[j-1] && j > 0){
            [arr[j-1],arr[j]] = [arr[j],arr[j-1]];
            steps.push([...arr])
            j--;
        }
        steps.push([...arr])
    }

    return steps;
}

export default insertionSort;