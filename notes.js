
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

const add = document.getElementById('plus');
const remove = document.getElementById('recycle');

let x = 1;

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
    let rightDiv = document.getElementById('right');
    h2.setAttribute('id', 'savedtext');
    rightDiv.appendChild(h2);
    console.log(textarea.value);
    let savedText = document.getElementById("savedtext");
    savedText.textContent = textarea.value;
})



add.addEventListener('click', addDiv);
add.addEventListener('click', showTextarea);














































