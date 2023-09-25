/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
//2.1 Using function declaration, define a function named add that takes two arguments and assigns them to the parameters number1 and number2.
function add (number1, number2){
    //2.2 In the function body, return the sum of the parameters number1 and number2.
    return number1 + number2;
}
//2.3 Using a function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of add1 and add2.
function addNumbers (add1, add2) {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    //2.4 Next, in the addNumbers function, call the add function using those two arguments and assign the return value to an HTML form element with an ID of sum
    document.querySelector('#sum').value = add(addNumber1,addNumber2);
    console.log('Equation: ',addNumber1,' + ', addNumber2,' = ',add(addNumber1,addNumber2));
}
//2.5 Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function. This line of code is NOT located inside a function. Why❔
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
    //3.1 Using function expressions, repeat the items in Step 2 with new functions named subtract and subtractNumbers and HTML form controls with IDs of subtract1, subtract2, subtractNumbers, and difference.
    //3.2.1 Using function declaration, define a function named add that takes two arguments and assigns them to the parameters number1 and number2.
    function subtract (number1, number2){
        //3.2.2 In the function body, return the sum of the parameters number1 and number2.
        return number1 - number2;
    }
    //3.2.3 Using a function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of add1 and add2.
    function subtractNumbers (subtract1, subtract2) {
        let subtractNumber1 = Number(document.querySelector('#subtract1').value);
        let subtractNumber2 = Number(document.querySelector('#subtract2').value);
        //3.2.4 Next, in the addNumbers function, call the add function using those two arguments and assign the return value to an HTML form element with an ID of sum
        document.querySelector('#difference').value = subtract(subtractNumber1,subtractNumber2);
        console.log('Equation: ',subtractNumber1,' - ', subtractNumber2,' = ',subtract(subtractNumber1, subtractNumber2));
    }
    //3.2.5 Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function. This line of code is NOT located inside a function. Why❔
    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
//4.1 Using arrow functions, repeat the items in Step 2 with arrow functions named multiply and multiplyNumbers and HTML form controls with IDs of factor1, factor2, multiplyNumbers, and product.
//4.2.1 Using function declaration, define a function named add that takes two arguments and assigns them to the parameters number1 and number2.
const multiply = (factor1, factor2) => factor1 * factor2;
//4.2.3 Using a function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of add1 and add2.
function multiplyNumbers (factor1, factor2) {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    //4.2.4 Next, in the addNumbers function, call the add function using those two arguments and assign the return value to an HTML form element with an ID of sum
    document.querySelector('#product').value = multiply(multiplyNumber1,multiplyNumber2);
    console.log('Equation: ',multiplyNumber1,' * ', multiplyNumber2,' = ',multiply(multiplyNumber1, multiplyNumber2));
}
//4.2.5 Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function. This line of code is NOT located inside a function. Why❔
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

//5.1 Using any combination of function declaration types, repeat the items in Step 2 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, divideNumbers, and quotient.
//5.2.1 Using function declaration, define a function named add that takes two arguments and assigns them to the parameters number1 and number2.
function divide (number1, number2){
    //3.2.2 In the function body, return the sum of the parameters number1 and number2.
    return number1 / number2;
}
//5.2.3 Using a function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of add1 and add2.
function divideNumbers (dividend, divisor) {
    let divideNumbers = Number(document.querySelector('#dividend').value);
    let divideNumbers2 = Number(document.querySelector('#divisor').value);
    //5.2.4 Next, in the addNumbers function, call the add function using those two arguments and assign the return value to an HTML form element with an ID of sum
    document.querySelector('#quotient').value = divide(divideNumbers,divideNumbers2);
    console.log('Equation: ',divideNumbers,' / ',divideNumbers2,' = ',divide(divideNumbers, divideNumbers2));
}
//5.2.5 Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function. This line of code is NOT located inside a function. Why❔
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
//7.1 Declare and instantiate a variable of to store the current date.
const currentDate = new Date();
console.log('Current Date - ',currentDate);
//7.2 Declare a variable to hold the current year.
//7.3 Using the variable declared in number 1, call the built-in getFullYear() method/function and assign it to the variable declared in 2.
const currentYear = new Date().getFullYear();
console.log('Current Year - ', currentYear);
//7.4 Assign the current year variable to an HTML form element with an ID of year.
document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
//8.1 Declare and instantiate an array variable to hold the numbers 1 through 13.
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//8.2 Assign the value of the array variable to the HTML element with an ID of array.
document.getElementById("array").textContent = numbersArray;
console.log('Source Array - ',numbersArray);

/* Output Odds Only Array */
//8.3 Use the filter() array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of odds
const oddNumbers = numbersArray.filter(num => num % 2 === 1);

document.getElementById('odds').textContent = oddNumbers;
console.log('Odd Numbers - ',oddNumbers);

/* Output Evens Only Array */
//8.4 Use the filter() array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of evens.

const evenNumbers = numbersArray.filter(num => num % 2 === 0);

document.getElementById('evens').textContent = evenNumbers;
console.log('Even Numbers - ',evenNumbers);

/* Output Sum of Org. Array */
//8.5 Use the reduce() array method to sum the array variable elements and assign the result to the HTML element with an ID of sumOfArray
const sumNumbers = numbersArray.reduce((sum,number) => sum + number);
document.getElementById('sumOfArray').textContent = sumNumbers;
console.log('Sum of Array - ',sumNumbers);

/* Output Multiplied by 2 Array */
//8.6 Use the map() array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of multiplied.
const multipliedNumbers = numbersArray.map(num => num * 2);

document.getElementById('multiplied').textContent = multipliedNumbers;
console.log('Source Array Multiplied by 2- ',multipliedNumbers);

/* Output Sum of Multiplied by 2 Array */
//8.7 Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of sumOfMultiplied.
const multipliedSumArray = numbersArray.map(num => num * 2);
const sumOfMultiplied = multipliedSumArray.reduce((acc, curr) => acc + curr);

document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
console.log('Sum of Array multiplied by 2 - ',sumOfMultiplied);