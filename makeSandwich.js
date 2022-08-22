// make sandwich 
var readline = require ('readline-sync');

let bread1 = readline.question(' which bread you would like to have - ');
let veggies1 = readline.question(' what are your favorite veggies - ');
let sauce1 = readline.question(' which sacuse you would like to have - ');

// lets define the function
function makeSandwich(bread, veggies , sauce){
    let sandwich = bread+  ' ' + 'bread' + ','+ ' ' + veggies+ ' '+ 'veggies' +','+ ' ' + sauce+' '+'sauce';
    return sandwich;
}
//calling the function 
var vegSandwich =  makeSandwich(bread1, veggies1 , sauce1);
console.log(vegSandwich);