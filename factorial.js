//5! = 5x4x3x2x1 = 120

//input: 5
//output: 120


function factorial(num){

    if(num === 1){
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(5))