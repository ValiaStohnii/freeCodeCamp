// 1. let & const
// // SETTING THE STAGE
// let player = "Per"
// let opponent = "Nick"
// let game = "AmazingFighter"
// const points = 0
// const hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = true

// // ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log(player + " got " + points + " points and won the " + game + " game!")
// } else {
//     console.log("The winner is " + opponent + "! " + player + " lost the game")
// }

// // Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"

let points = 0
let hasWon = false

points += 100
hasWon = true

if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!"`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}
///////////////////////////////////////////////////////////////////////
//2. Log out items in an array
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function item(arr) {
    for(let i=0; i< arr.length; i++){
        console.log(arr[i]);
    }
}
item(myCourses)

////////////////////////////////////////////////////////////////
//3. save to localStorage
// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

localStorage.setItem("name", "Valia")
localStorage.getItem("name")
localStorage.clear()
///////////////////////////////////////////////////////////////////////
//4. addEventListener and object in array
let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
const scoreBtn = document.getElementById('score-btn')
// Use addEventListener() to listen for button clicks
scoreBtn.addEventListener("click", function () {
    console.log(data[0].score);
})
// Log Jane's score when the button is clicked (via data)

/////////////////////////////////////////////////////////////////////////
//5. Generate sentence
// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let baseStr = `The ${arr.length} ${desc} are `
    const lastInd = arr.length - 1
    for(let i = 0; i< arr.length; i++){
        if(i===lastInd){
            baseStr+= arr[i]
        }else {
            baseStr += arr[i] + ", "
        }
    }
    return baseStr
}

const sentence = generateSentence("largest countries",["China", "India", "USA"])
console.log(sentence);
////////////////////////////////////////////////////////////////////////////
//6. Render images

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const countainer = document.getElementById("container")

function render(img) {
    let imgsDOM = ''
    for(let i=0; i<img.length;i++){
        imgsDOM +=`<img class="team-img" src=${img[i]}>`
    }
    countainer.innerHTML = imgsDOM
}
render(imgs)