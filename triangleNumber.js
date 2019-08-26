const triangularNumber = function(num){

    if(num === 1){
        return 1;
    }

    return num + triangularNumber(num-1)

    //num = sum n from 1 to n
    //1 = 1, 
    // 2 = 1 + 2 = 3 
    // 3 = 1 + 2 + 3 = 6
    // 4 = 1 + 2 + 3 + 4 = 10
}

console.log(triangularNumber(8));