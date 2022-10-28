function keymedian(arr) {

    arr.sort( function(x , y) {return x - y;} );

    var middle = Math.floor(arr.length/2);

    if(arr.length % 2)
        return arr[middle];
    else
        return (arr[middle-1] + arr[middle]) / 2 ;

}
