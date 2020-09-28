
// const add = document.getElementById('plus');

// function createNote() {
//     let element = document.createElement("div");
//     element.setAttribute('id', 'header');

//     element.appendChild(document.createElement('p'));
//     element.appendChild(document.createElement('p'));

//     //p.setAttribute('id', 'note'); 
//     //p1.setAttribute('id', 'clickTime'); 
    
//     let t = new Date();
//     let time = t.toLocaleTimeString();

//     document.getElementById('left').appendChild(element);
//     document.getElementsByTagName('p')[0].innerHTML = 'Note';
//     document.getElementsByTagName('p')[1].innerHTML = time;
// }

// add.addEventListener('click', createNote);
function time () {
    let t = new Date();
    let date = t.toLocaleString();
    document.getElementById("time").innerText = date;
}; time();
let y = 17;
const add = document.getElementById('plus');
const remove = document.getElementById('recycle');

let x = 5;

function addDiv () {
    if (x > 0) {
    let leftDiv = document.getElementById('left');

    let newDiv = document.createElement("div");
    newDiv.setAttribute('id', 'header');
    leftDiv.appendChild(newDiv);

    let par = document.createElement("p");
    par.textContent = 'Note';
    newDiv.appendChild(par);

    let par1 = document.createElement("p");
    let t = new Date();
    let date = t.toLocaleTimeString();
    par1.textContent = date;
    newDiv.appendChild(par1);
    }
    x--;
}

function showTextarea() {
    let story = document.getElementById("story");
    story.style.display = "block";
    document.getElementById("save").style.display = "block";
    
}

let button = document.getElementById("save");
let textarea = document.getElementById("story");

button.addEventListener("click", function () {
    let h2 = document.createElement("p");
    h2.textContent = textarea.value;
    document.getElementById('right').appendChild(h2);
    h2.setAttribute('id', 'savedtext');
    console.log(textarea.value);
})

add.addEventListener('click', addDiv);
add.addEventListener('click', showTextarea);














































