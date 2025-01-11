const sumAll = function(x,y) {
    //Create var to keep sum
    let sum = 0
    //Validate input and prevent non numeric values
    if(!(Number.isInteger(x)) || !(Number.isInteger(y)) || x<0 || y<0){
        return "ERROR";
    }
    //Then we need to define the lowest number
    const minValue = x<=y ? x :y;
    const maxValue = x>y ? x : y;
    //Then loop while increasing the value.
    for(i=minValue;i<=maxValue;i++){
        sum=sum+i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
