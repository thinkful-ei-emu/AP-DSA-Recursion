function reverseString(input){

    if(input === ''){
        return '';
    }

    return reverseString(input.substr(1)) + input.charAt(0);
}


console.log(reverseString('reverse me'))