// The parameter’s default value will be overwritten if the function passes a value explicitly.
 
function addparam (number1 ,number2=6){
    return number1+number2;
}
console.log(addparam(20, 4));