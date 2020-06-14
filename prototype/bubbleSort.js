const bubbleSort = arr => {
    let count = 0;
    let resArr = [];
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 1; j < arr.length-i; j++){
            if(arr[j-1] > arr[j]){
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            }
            
            const newA = new Array(...arr);
            resArr.push(newA);
            setTimeout(() => console.log(newA), 1000*count++);
        }
    }
    return resArr;
}

const x = bubbleSort([2,80,10,49,1]);
console.log(x)
// 2 10 49 1 80
// 2 10 1 49 80
// 2 1 10 49 80
// 1 2 10 49 80