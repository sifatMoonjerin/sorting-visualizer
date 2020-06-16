const mergeSort = unsortedArray => {
    let steps = [];

    const merge = (arr, start, end) => {
        if(arr.length <= 1){
            return arr;
        }
    
        const mid = Math.floor(arr.length/2)
        const a = merge(arr.slice(0, mid), start, start+mid);
        const b = merge(arr.slice(mid, arr.length), start+mid, end);
    
        let resArr = [];
    
        while(!!a.length && !!b.length){
            resArr.push((a[0] < b[0]) ? a.shift() : b.shift())
        }

        
        resArr = [...resArr,...a,...b]

        for(let i = 0; i < resArr.length; i++){
            unsortedArray.splice(start+i, 1,resArr[i]);
            const step = [...unsortedArray];
            steps.push(step);
        }

        return resArr;
    }

    if(unsortedArray.length > 1){
        merge(unsortedArray, 0, unsortedArray.length);
    }else{
        steps.push(unsortedArray)
    }

    return steps;
}

export default mergeSort;