const mergeSort = unsortedArray => {
    let steps = [];

    const merge = (arr, start, end) => {
        if(arr.length <= 1){
            return arr;
        }
    
        const mid = Math.floor(arr.length/2)
        const a = merge(arr.slice(0, mid), start, start+mid);
        const b = merge(arr.slice(mid, arr.length), start+mid, end);
        // console.log('ddd',a,b)
    
        let resArr = [];
    
        while(!!a.length && !!b.length){
            resArr.push((a[0] < b[0]) ? a.shift() : b.shift())
        }

        
        resArr = [...resArr,...a,...b]

        unsortedArray.splice(start, end-start,...resArr);
        const step = [...unsortedArray];
        steps.push(step);

        return resArr;
    }

    if(unsortedArray.length > 1){
        merge(unsortedArray, 0, unsortedArray.length);
    }else{
        steps.push(unsortedArray)
    }

    return steps;
}


//const x = mergeSort([2,1,4,3,7,5,9,6,8])
//const x = mergeSort([12, 15, 23, 4 , 6, 10, 35, 28])
//const x = mergeSort([])
const x = mergeSort([12, 12, 12, 12, 12])
//const x = mergeSort([12, 12, 23, 4 , 6, 6, 10, -35, 28])
//const x = mergeSort([12, 15, -23, -4 , 6, 10, -35, 28])
//const x = mergeSort([35, 28, 23, 15, 12, 10, 6, 4])
//const x = mergeSort([12, 15, 23, 4 , 6, 10, 35, 28, 100, 130, 500, 1000, 235, 554, 75, 345, 800, 222, 333, 888, 444, 111, 666, 777, 60])
console.log(x)