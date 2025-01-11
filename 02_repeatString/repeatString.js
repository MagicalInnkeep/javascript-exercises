const repeatString = function(string, num) {
    //function which repeats a given string a given number of times
    let returnString="";
    for(i=0;i<num;i++){
        returnString+=string;
    }
    if(num<0){
        returnString="ERROR";
    }
    return returnString
};

// Do not edit below this line
module.exports = repeatString;
