function isUnique(str) {
    var map = new Map();
    var isUnique = true;
    
    for (let s of str) {
        if(map.getKey(s)) {
            isUnique = false;
        } else {
            map.put(s, 1)
        }
    return isUnique;
}
}
function isPermuatation(str, str2) {
    var isPerm = false;
    if(str.length !== str2.length) {
        return false
    }
    var sorted1 = str.split('').sort().join()
    var sorted2 = str2.split('').sort().join()
    if(sorted1.equals(sorted2)){
        isPerm = true
    }
    return isPerm;
}

function urlify(str) {
    var url = str.split(" ").map((string) =>{
        return string + "%20"
    }).join("")
    return url;
}

permutationsPalindrome("tact coa")

function permutationsPalindrome(string) {
    var str = string.split(" ").join("")
    var map = new Map();
    var oddValues = 0;
    for(let s of str) {
        if(map.has(s)) {
            map.set(s,map.get(s) + 1)
        } else {
            map.set(s,1)
        }
    }
    for(let s of str) {
        if(map.has(s)) {
            const count = map.get(s);
            if(count % 2 !== 0) {
                oddValues++
            }
        } 
    }

    if (isOdd(str)) {
        if (oddValues > 1) {
            isPerm = false;
        } else {
            isPerm = true;
        }
    
    } else {
        if (oddValues === 0) {
            isPerm = true;
        } else {
            isPerm = false;
        }

    }
    return isPerm;
}

function isOdd(str) {
    var isOdd = true;
    if (str.length % 2 == 0) {
        isOdd = false;
    }
    
    return isOdd;
}

function oneAway(str, str2){
    var oneAway = false
    if (str === str2){
        return true;
    }
    var index = 0;
    for (let letter of str) {
        if (letter === str2[index]){
            index++
            continue
        }
        var temp = str.slice(0, index)  + str2[index] + str.substr(index)
        console.log(str.substr(index))
        if(temp === str2) {
            oneAway = true
        }
        index++
    }
    return oneAway
}

function zeroMatrix(arr) {


}

function canTransform(str1, str2) {
    var map = new Map();
    var newString = [];
    if(str1.length != str2.length) {
      return false;
    }
    var index = 0;
    for(const char of str1) {
      if(char === str2[index]) {
        map.set(char, str2[index])
        newString[index] = str2[index]
  
      } else {
  
        if(map.get(char)) {
          newString[index] = map.get(char)
  
        } else {
          map.set(char, str2[index])
          newString[index] = str2[index]
        }
        
      }
      index++
    }
    var same = false;
    console.log(newString.join(''))
    if(newString.join('') === str2) {
      same = true
    }
    return same
  }

  function intToNumberic(val) {
    const ones = ["",'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten',
  'eleven', 'twelve', "thirteen", 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ["","", 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const hundreds = ["","hundred", "thousand"]
    const digitArray = val.toString().split('')
    let size = digitArray.length
    let finalString = "";

    digitArray.forEach(digit => {
      console.log(size)
      if (size > 4) {
          console.log("not supported yet")
      }
      else if (size === 4) {
          finalString = finalString + ones[parseInt(digit)] + hundreds[2]
          size--
      }
      else if (size === 3) {
        let index = 1
        if (digit === "0") {
          index = 0;
        }
          finalString = finalString + ones[parseInt(digit)] + hundreds[index]
          size--
      }
      else if (size === 2) {
          if (parseInt(digit) === 1) {
              const combined = digit + digitArray[size - 1]
              finalString = finalString + ones[combined]
              size = size - 2;
          } else {
              finalString = finalString + tens[parseInt(digit)]
              size--
          }
      }
      else if (size === 1) {
          finalString = finalString + ones[parseInt(digit)]
          size--
      }

    });
    return finalString;

}

intToNumberic(2345)
  

