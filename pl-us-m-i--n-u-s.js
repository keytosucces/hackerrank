function keyPlusMinus(arr) {
    
    let pos = arr.filter(number => number > 0).length / arr.length;
    let neg = arr.filter(number => number < 0).length / arr.length;
    let nonum = arr.filter(number => number === 0).length / arr.length;

    return console.log(pos.toFixed(6) + neg.toFixed(6) + nonum.toFixed(6));
}