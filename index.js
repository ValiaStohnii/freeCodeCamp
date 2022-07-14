let myLeads = []

const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')

inputBtn.addEventListener('click', btnClick)
deleteBtn.addEventListener('dblclick', deleteItem)
tabBtn.addEventListener('click', tabSave)

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function tabSave(){
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
}

function render(leads) {
    //...third
    let listItems =''
    
    for (let i = 0; i<leads.length; i++){
        //....first
        // ulEl.innerHTML += '<li>'+ myLeads[i]+'</li>' 
        
        //...second
        // const li = document.createElement('li')  //createElement
        // li.textContent = myLeads[i]
        // ulEl.append(li)                           // append
        
        //...third
        //listItems += '<li><a target="_blank" href="'+myLeads[i]+'">'+ myLeads[i]+'</a></li>'
        
        //Template string  =  ``
        listItems += `
        <li>
        <a target="_blank" href="${leads[i]}">
        ${leads[i]}
        </a>
        </li>`
    }
    //...third
    ulEl.innerHTML = listItems
}

function btnClick(){
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
}

function deleteItem() {
    localStorage.clear()
    myLeads=[]
    render(myLeads)
}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// localStorage.setItem('myLeads', 'www.valia.com')
// console.log(localStorage.getItem('myLeads'))
// localStorage.clear()

// HINTS:
// localStorage.setItem(key, value) - Save a key-value pair in localStorage
// localStorage.getItem(key) -Refresh the page. Get the value and log it to the console
// localStorage.clear() - Clear localStorage
// PS: both key and value need to be strings
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let myLead = `["www.example.com"]`
// //1. turn the myLeads1 string into an array
// myLead = JSON.parse(myLead)
// //2. push a new value tj the array
// myLead.push("www.leads2.com")
// //3. turn the array into a string again
// myLead = JSON.stringify(myLead)
// //4. console.log the string using typeof to verify that it's a string
// console.log(typeof myLead);
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//??????????????????????????????????????????????????????????????????
// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// console.log(  Boolean("")   ) //false
// console.log(  Boolean("0")  ) //true
// console.log(  Boolean(100)  ) //true
// console.log(  Boolean(null) ) //false
// console.log(  Boolean([0])  ) //true
// console.log(  Boolean(-0)   ) //false
//?????????????????????????????????????????????????????????????????????

//************************************************************************* 
// Arguments vs Parameters
//.                    parameters
// function greetUser(greeting, name) { 
//     welcomeEl.textContent = `${greeting}, ${name} 👋`
// }

// let hi = "Howdy"
// //.        arguments
// greetUser(hi, "James")
//********************************************************************

