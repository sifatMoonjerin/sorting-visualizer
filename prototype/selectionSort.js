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

const arr = [12, 15, 23, 4 , 6, 10, 35, 28];
//const arr = [2,1,4,3,7,5,9,6,8];
//const arr = [12, 12, 23, 4 , 6, 6, 10, -35, 28];
//const arr = [12, 15, -23, -4 , 6, 10, -35, 28];
//const arr = [35, 28, 23, 15, 12, 10, 6, 4];
//const arr = [12, 15, 23, 4 , 6, 10, 35, 28, 100, 130, 500, 1000, 235, 554, 75, 345, 800, 222, 333, 888, 444, 111, 666, 777, 60];
//const arr = [12, 12, 12, 12, 12];
//const arr = [];

console.log(selectionSort(arr))