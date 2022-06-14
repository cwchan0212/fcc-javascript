/*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

*/
function convertToRoman(num) {

    const romans = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    const value = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let idx = romans.length - 1;
    let res = "";
    while (num > 0){
        while(value[idx] <= num){
            res += romans[idx];
            num -= value[idx];
        }
        idx--;
    }
    console.log(res);
    return res;
   }
   
convertToRoman(36);
convertToRoman(2);
convertToRoman(3);
convertToRoman(4);
convertToRoman(5); 
convertToRoman(9); 
convertToRoman(12); 
convertToRoman(16); 
convertToRoman(29); 
convertToRoman(44); 
convertToRoman(45); 
convertToRoman(68); 
convertToRoman(83); 
convertToRoman(97); 
convertToRoman(99); 
convertToRoman(400); 
convertToRoman(500); 
convertToRoman(501); 
convertToRoman(649); 
convertToRoman(798); 
convertToRoman(891); 
convertToRoman(1000); 
convertToRoman(1004); 
convertToRoman(1006); 
convertToRoman(1023); 
convertToRoman(2014); 
convertToRoman(3999); 
