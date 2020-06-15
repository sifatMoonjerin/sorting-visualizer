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

const arr = [12, 15, 23, 4 , 6, 10, 35, 28];
//const arr = [2,1,4,3,7,5,9,6,8];
//const arr = [12, 12, 23, 4 , 6, 6, 10, -35, 28];
//const arr = [12, 15, -23, -4 , 6, 10, -35, 28];
//const arr = [35, 28, 23, 15, 12, 10, 6, 4];
//const arr = [12, 15, 23, 4 , 6, 10, 35, 28, 100, 130, 500, 1000, 235, 554, 75, 345, 800, 222, 333, 888, 444, 111, 666, 777, 60];
//const arr = [12, 12, 12, 12, 12];
//const arr = [];

console.log(insertionSort(arr))
