/*

 1) Understand the problem
    a) Ask clarifying questions (how big is the array, empty strings, etc.)
    b) ANY SENSE OF DOUBT, MUST PERFECTLY UNDERSTAND THE PROBLEM

 2) Come up with a plan and pseudo code it.

 3) Go for it. Start writing the code and talk out loud as I go through the steps.
    a) Describe any sort of walls or problems you come along, talk about potential avenues/solutions.

 */

// function centuryFromYear(year) {
//    let century = Math.ceil(year / 100)
//    return century
// }

// console.log(centuryFromYear(2001));

// -----------------------------------------------

//test arr
// a = ["Ryan", "Kieran", "Jason", "Matt"];

// function fourStr(arr) {
//empty arr
    // let x = [];
//loop through arr length
    // for (i = 0; i < arr.length; i++) {
//check for number of characters
        // if (arr[i].length === 4) {
//push any results to arr
    //         x.push(arr[i]);
    //     }
    // }
//return arr
    // return x;
// }

// console.log(fourStr(a));

// -----------------------------------------------

// function func(x) {
//placeholder var
    // let y = 0;
//for loop run until it hits the passed in number
    // for (i = 1; i <= x; i++) {
//add each generated number together
        // y = i + y
    // }
//return the sum
    // return y;
// }

// console.log(func(13));

// -----------------------------------------------

//empty arr
// let x = [];

// function func(item, times) {
//loop through arr
    // for (i = 0; i < times; i++) {
//push the item * (times) into the empty array
        // x.push(item);
    // }
// return the arr
    // return x
// }

// console.log(func("item", 4))

//test arr
let x = [2, 1, 3, 5, 3, 2];

function firstDuplicate(arr) {
    //empty arr
    let result = [];
    arr.forEach(function (a, b) {
//find if there is a duplicate or not
        if (arr.indexOf(a, b + 1) > -1) {
//if there is a dupulicate, push it into the arr
            result.push(a);
        }
    });
//return only the first index of the duplicated numbers arr
    return result[0];
}

console.log(firstDuplicate(x));