//input: 3
//output: 11

//input: 25
//output: 11001


function convertBinary(num){

    if(num === 0){
        return '';
    }

    let binary = Math.floor(num % 2);

    return convertBinary(Math.floor(num/2)) + binary;

}

console.log(convertBinary(3))