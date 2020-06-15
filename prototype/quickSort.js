const quickSort = unsortedArray => {
    let steps = [];

    const quick = (arr, start, end) => {
        if(start < end){
            const pi = partition(arr, start, end);

            steps.push([...arr]);
    
            quick(arr, start, pi-1);
            quick(arr, pi+1, end);
        }
    }

    quick(unsortedArray, 0, unsortedArray.length-1);

    return steps;
}

const partition = (arr, start, end) => {
    let pivot = arr[end];

    let pi = start-1;

    for(let i = start; i < end; i++){
        if(arr[i] < pivot){
            pi++;
            [arr[i], arr[pi]] = [arr[pi], arr[i]];
        }
    }

    pi++;

    [arr[pi], arr[end]] = [arr[end], arr[pi]];
    return pi;

}



const arr = [12, 15, 23, 4 , 6, 10, 35, 28];
//const arr = [2,1,4,3,7,5,9,6,8];
//const arr = [12, 12, 23, 4 , 6, 6, 10, -35, 28];
//const arr = [12, 15, -23, -4 , 6, 10, -35, 28];
//const arr = [35, 28, 23, 15, 12, 10, 6, 4];
//const arr = [12, 15, 23, 4 , 6, 10, 35, 28, 100, 130, 500, 1000, 235, 554, 75, 345, 800, 222, 333, 888, 444, 111, 666, 777, 60];
//const arr = [12, 12, 12, 12, 12];

console.log(quickSort(arr))

//console.log(arr)