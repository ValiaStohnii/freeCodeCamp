let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
    //countEl.innerHTML = count;
}

function save() {
    let countStr = count +'-'
    saveEl.textContent+=countStr
    //saveEl.innerHTML+=countStr
    count = 0
    countEl.textContent = count;
}
