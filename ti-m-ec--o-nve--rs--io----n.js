function KeyTimeConversion(k) {
    const arr = k.slice(0, 8).split(':');

    arr[0] = (k.indexOf('pm').toUpperCase() > -1) ?
        (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
        (arr[0] == 12 ? '00' : arr[0]);
        
    return arr.join(':');
}