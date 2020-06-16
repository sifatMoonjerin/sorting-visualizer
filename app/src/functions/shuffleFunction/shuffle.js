const shuffle = num => {
    const arr = [];
    const inc = 100/num;
    for(let i = 0; i < 100; i += inc){
        arr.push(i);
    }

    for(let i = (arr.length-1); i > 0; i--){
        const j = Math.floor(Math.random() * i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

export default shuffle;