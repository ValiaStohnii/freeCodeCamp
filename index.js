//Variables practice

let firstName= 'Valia'
let lastName = 'Stohnii'

let fullName = firstName + ' ' + lastName
console.log(fullName);

////////////////////////////////////////////////////////////
//Contatenate two strings in a function

let name= 'Valia'
let greetig = 'Hi there'

function greet(){
    console.log(greetig + ', '+ name + '!');
}

greet()

//////////////////////////////////////////////////////////////////
// Incrementing and Decrementing

let myPoints= 3

function add3Points() {
    myPoints += 3
}

add3Points()
console.log(myPoints);

function removePoints() {
    myPoints -= 1
}

removePoints()

console.log(myPoints);

///////////////////////////////////////////////////////////////
//Strings and numbers

// Try to predict what each of the lines will log out
console.log("2" + 2) // '22'
console.log(11 + 7) // 18
console.log(6 + "5") // '65'
console.log("My points: " + 5 + 9) // 'My points: 59'
console.log(2 + 2) //  4
console.log("11" + "14") // '1114'

////////////////////////////////////////////////////////////////////
// Rendering an error message

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorPurchase = document.getElementById("error")

function btnClick(){
    errorPurchase.textContent = "Something went wrong, please try again"
}

////////////////////////////////////////////////////////////////////
// Calculator challenge

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById('sum-el')

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result  
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}

