const shuffle = arr => {
    for(let i = (arr.length-1); i > 0; i--){
        const j = Math.floor(Math.random() * i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

export default shuffle;