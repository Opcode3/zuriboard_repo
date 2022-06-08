
/*
Write a Javascript calculator that can perform: 
addition, subtraction, division, multiplication and modulus operations.

Directive::::

To perform an operation use..
add for addition 
sub for subtraction
div for division
mul for multiplication
mod for modulus


to implement use; call
calculator(first_number, second_number, operator)
*/
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const substract = (num1, num2) => num1 - num2;
const addition = (num1, num2) => num1 + num2;
const modulus = (num1, num2) => num1 % num2;


function calculator(num1=0, num2=0, operator = ''){
    switch (operator){
        case 'add':
            return addition(num1,num2)
        case 'sub':
            return substract(num1,num2)
        case 'div':
            return divide(num1,num2)
        case 'mul':
            return multiply(num1,num2)
        case 'mod':
            return modulus(num1,num2)
        default:
            return num1
    }
}



const num1 = 3, num2 = 5, operator = 'mul';

console.log(
    calculator(num1, num2, operator)
)
