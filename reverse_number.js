// writing program of reverse number

function reverse_number(num)
    {
        // converting number to string. 
        num = num+ ' ';
        return num.split("").reverse().join("");
    }
console.log(Number(reverse_number(32279)));
