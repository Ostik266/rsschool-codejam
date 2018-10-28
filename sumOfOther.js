function sumOfOther(arr) {
    let sumOfArr = arr.reduce((sum, current) => {
        return sum + current;
    });
    let sumArr = arr.map(el => {
        return sumOfArr - el;
    });
    return sumArr;
}