/* Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. 
*/

function checkCashRegister(price, cash, cid) {
    const note = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }
    const result = {status: null, change: []};
    let cidSum = 0;
    const changeArr = [];

    for (let c of cid) {
        cidSum += c[1];
    }
    cidSum = cidSum.toFixed(2);
//    console.log("cidSum", cidSum) ;
    let change = cash - price;
 //   console.log("change:" , change);
    
    if (change > cidSum) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        console.log(result)
        return result;
    } else if (change.toFixed(2) === cidSum) {
        result.status = "CLOSED";
        result.change = cid;
        console.log(result)
        return result;
    } else {
        cid = cid.reverse()
        for (let e of cid) {
            let register = [e[0], 0];   
            // register[0]: note - face value, register[1]: no. of note
            // note[e[0]]: note's value, e[1]: note's value in drawer
            while (e[1] > 0 && change >= note[e[0]]) {
                register[1] += note[e[0]];
                e[1] -= note[e[0]];
                change -= note[e[0]];
                change = change.toFixed(2);
            }  
            if (register[1] > 0) {
                changeArr.push(register);
            }
        }
        console.log(changeArr);
    }

    if (change > 0) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        console.log(result);
        return result;
    }  

    result.status = "OPEN";
    result.change = changeArr;
    console.log(result);
    return result;

  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 
