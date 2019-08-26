const powerCalculator = function(int, exp){

    if(exp < 0){
        return 'exponent should be >= 0';
    }

    else if(exp === 0){
        return 1;
    }

    else{
        return int * powerCalculator(int, exp-1);
    }

}

console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, -2));


