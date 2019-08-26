function stringSplitter(string, separator){

    let index = string.indexOf(separator)

    if(index == -1){
        return string;
    }

    return string.slice(0, index) + stringSplitter(string.slice(index + separator.length), separator)
}

console.log(stringSplitter('02/20/2020', '/'));