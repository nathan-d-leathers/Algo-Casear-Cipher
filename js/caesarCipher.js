exports.caesarCipher = function(str,num) {

        let regex = /[^a-z]/gi
        let holdArr = [];
        let answerArr = [];
      
        for (let i=0;i<str.length;i++) {
          if (str[i].match(regex) != null) {
            holdArr.push(str[i]);
            answerArr.push(str[i]);
          } else {
            holdArr.push(str[i].charCodeAt()+num);
            if (holdArr[i] > 122 || (holdArr[i] > 90 && holdArr[i] < 97)) {
              holdArr[i] -= 26;
            }
            answerArr.push(String.fromCharCode(holdArr[i]));
          }
        }
      
        str = answerArr.join("");
        return str; 
      
      }
      
// caesarCipher('coderBYTE', 2)
// output: eqfgtDAVG    

// need to adjust code to be able to handle negative numbers