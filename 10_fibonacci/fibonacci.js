const fibonacci = function(init) {
    number= parseInt(init);
    if(number==null){
        return "OOPS";
    }
    else if (number<0){
        return "OOPS";
    }
    else{
    let fiboNo = 0;
    let bufferNo =1;
    let buffer2No =0;
    for(let i=1; i<=number;i++){
        fiboNo=bufferNo+buffer2No;
        bufferNo=buffer2No;
        buffer2No=fiboNo;
    }
    return fiboNo;
    }
};

// Do not edit below this line
module.exports = fibonacci;
