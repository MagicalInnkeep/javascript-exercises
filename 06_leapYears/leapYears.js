const leapYears = function(currYear) {
    let isLeap = false;
    //Leap years are years divisible by four (like 1984 and 2004). 
    if(currYear%4==0){
        if(currYear%100==0){
            //However, years divisible by 100 are not leap years (such as 1800 and 1900)
            if(currYear%400==0){
                //unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
                isLeap=true;
            }
        }
        else{
            isLeap=true;
        }
    }
    return isLeap;
 
    

};

// Do not edit below this line
module.exports = leapYears;
