const KeyMiniMaxSum = (arr) => {
    let sumValue = arr.reduce((x, y) => x + y);

    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);

    console.log((sumValue - maxValue) + (sumValue - minValue));
}