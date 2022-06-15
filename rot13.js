/* Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
    let arr = str.split(" ")
    let res = [];
    for (let i=0; i<arr.length; i++) {
      let cha = arr[i].split("");
      let tmp = "";
      for (let j = 0; j<cha.length; j++) {
        if ((cha[j].charCodeAt(0) >=65) && (cha[j].charCodeAt(0) <= 90)) {
          if ((cha[j].charCodeAt(0)+13) > 90) {
            tmp += String.fromCharCode(cha[j].charCodeAt(0)+13 - 90 + 64);
          } else {
            tmp += String.fromCharCode(cha[j].charCodeAt(0)+13);
          }
        } else {
          tmp += cha[j];
        }
      }
      res.push(tmp);
    }
    console.log(res);
    return res.join(" ");
  }
  
  rot13("FREE PIZZA!");
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!");
  rot13("SERR YBIR?");
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
