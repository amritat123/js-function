// passed string is palindrome or not?

function check_plaindrom_num()
{
    //get the total length of string words 
    const len = string.length;

    // use loop  to divide words into 2 form
    for( let i=0; i<len/2 ; i++) {
        if(string[i]!== string[len-1-i])
        {
            console.log("It's not a plaindrome number");
        
        }
    }
    console.log("YES!", "It's plaindrome number");
}
var readline = require ('readline-sync');
    let string= readline.question('Enter your string - ');

check_plaindrom_num(string);