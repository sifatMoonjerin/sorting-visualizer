const mergeSort = (arr) => {
    if(arr.length <= 1){
        return arr;
    }

    const mid = Math.floor(arr.length/2)
    const a = mergeSort(arr.slice(0, mid));
    const b = mergeSort(arr.slice(mid, arr.length));
    // console.log('ddd',a,b)

    let resArr = [];

    while(!!a.length && !!b.length){
        resArr.push((a[0] < b[0]) ? a.shift() : b.shift())
    }

    return [...resArr,...a,...b];
}

const x = mergeSort([1,2,4,3,7,5,6,7,8])
console.log(x)
//test commit 