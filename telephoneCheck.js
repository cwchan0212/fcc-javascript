/* Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/


function telephoneCheck(str) {
    // let regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
    // let regExp = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/g;
    // console.log(regExp.test(str));
    // return regExp.test(str);
    
      //console.log(str, str.indexOf("("), str.indexOf(")"))
      if (((str.indexOf("(") === -1)  && (str.indexOf(")") != -1) ) || ( (str.indexOf("(") != -1)  && (str.indexOf(")") === -1))) {
        //console.log(str, str.indexOf("("), str.indexOf(")"), false);
        return false;
      } else if (str.indexOf(")") - str.indexOf("(") > 4) {
        //console.log(str, str.indexOf("("), str.indexOf(")"), false);
        return false;
      } else if (str.indexOf("-") == 0) {
        //console.log(str, str.indexOf("("), str.indexOf(")"), false);
        return false;
      } else {
        let re = /[\*\&\?\#]/g;
        //console.log(str, re.test(str));
        if (re.test(str)) {
          // console.log(str, false);
          return false;
        } else {
          
          let re = /[\(\)]/g;
          str = str.replace(re, " ");
          if (str.length < 10) {
            return false;
          } else {
            re = /[\-\s+]/g
            let p = str.split(re);
            let len = 0;
            len = arrLen(p);
            if (len === 10 && str.length === 10 )  {
                //console.log(str, true);
                return true;
            } else if (len === 11 && p[0] === "1"){
                //console.log(str, true);
                return true;
            } else if (len === 10 && p[0] === ""){
              //console.log(str, true);
              return true;
            } else if (len === 10 && p[0].length === 3){
              //console.log(str, true);
              return true;
            } else {
              //console.log(str, false);
              return false;
            }
          }
        }
      }
    }
    
    function arrLen(arr) {
      let len = 0;
      for (let i=0; i<arr.length; i++) {
        len += arr[i].length;
      }
      return len;
    }
    
    
     
    telephoneCheck("555-555-5555");
    telephoneCheck("1 555-555-5555");
    telephoneCheck("1 (555) 555-5555");
    telephoneCheck("5555555555");
    telephoneCheck("555-555-5555");
    telephoneCheck("(555)555-5555");
    telephoneCheck("1(555)555-5555");
    telephoneCheck("555-5555");
    telephoneCheck("5555555");
    telephoneCheck("1 555)555-5555");
    telephoneCheck("1 555 555 5555");
    telephoneCheck("1 456 789 4444");
    telephoneCheck("123**&!!asdf#");
    telephoneCheck("55555555");
    telephoneCheck("(6054756961)");
    telephoneCheck("2 (757) 622-7382");
    telephoneCheck("0 (757) 622-7382");
    telephoneCheck("-1 (757) 622-7382");
    telephoneCheck("2 757 622-7382");
    telephoneCheck("10 (757) 622-7382");
    telephoneCheck("27576227382")
    telephoneCheck("(275)76227382")
    telephoneCheck("2(757)6227382");
    telephoneCheck("2(757)622-7382");
    telephoneCheck("555)-555-5555");
    telephoneCheck("(555-555-5555");
    telephoneCheck("(555)5(55?)-5555");
    telephoneCheck("55 55-55-555-5");
    telephoneCheck("11 555-555-5555");
