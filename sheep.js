const countSheep = function(sheep){

    if (sheep === 0){
        return console.log(`All Sheep jumped over the fence`);
    }

    console.log(`${sheep}: Another sheep jump over the fence `);
    countSheep(sheep - 1);
}

countSheep(3)