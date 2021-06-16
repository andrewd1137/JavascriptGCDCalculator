function myGCD(x,y) {
    if((typeof x !== 'number') || (typeof y !== 'number'))
        return false;

    //The GCD of any number and 0 is the other number
    if(x == 0)
        return y;
    if(y == 0)
        return x;

    //If x or y are negative, then take their abs value
    if(x<0)
        x = Math.abs(x);
    if(y<0)
        y = Math.abs(y)

    //x has to be greater than y, so swap order if it isn't
    if(y > x) {
        var swap = x;
        x = y;
        y = swap;
    }

    //recursive gcd function
    while(y){
        var temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

console.log('The GCD of 10 and 15 is: ', myGCD(10, 15));
console.log('The GCD of 3 and 9 is: ', myGCD(3, 9));
console.log('The GCD of 21 and 11 is: ', myGCD(21, 11));
console.log('The GCD of 0 and 11 is: ', myGCD(0, 11));
console.log('The GCD of -14 and -7 is: ', myGCD(-14, -7));