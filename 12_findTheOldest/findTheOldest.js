const findTheOldest = function(array) {
    const d = new Date();
    const year = d.getFullYear();

    for(let item in array){
        if(!array[item].yearOfDeath){
            array[item].yearOfDeath= year;
        }
    }
    let arr2=array
                .sort( (a,b) => 
                (a.yearOfDeath-a.yearOfBirth) > (b.yearOfDeath-b.yearOfBirth) ? -1 : 1
                )
    return arr2[0];
            
};

// Do not edit below this line
module.exports = findTheOldest;
