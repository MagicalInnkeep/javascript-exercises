const removeFromArray = function(array,valueList) {;
    for(var i=0;i<valueList.length;i++){
        const index = array.getIndexOf(valueList[i]);
        console.log(`Remove ${valueList[i]} from ${array}`)
        if(index>=0){
            array=array.splice(index,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
