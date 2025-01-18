function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

const palindromes = function (string) {
    let reversed = string
                    .split('')
                    .filter(item => isAlphaNumeric(item))
                    .reverse()
                    .join('');
    let normal = string
                    .split('')
                    .filter(item => isAlphaNumeric(item))
                    .join('');
    return normal.toUpperCase()==reversed.toUpperCase();         
    
};

// Do not edit below this line
module.exports = palindromes;
