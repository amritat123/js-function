// Writing program of generates all combinations of a string.
function combinations_of_str(enter_str)
{
    let combination_str = [];

    //using loop .
    for (i=0 ; i<=enter_str.length;i++)
    {
        for (j=i+1; j<=enter_str.length;j++)
        {
            combination_str.push(enter_str.slice(i,j));
        }
    }
return combination_str;
}
console.log(combinations_of_str("Dog"));
