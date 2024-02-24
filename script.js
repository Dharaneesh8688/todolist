const input = document.getElementById("input-box");
const list = document.getElementById("list");

function addTask() {
    if(input.value ===""){
        alert("write some thing to store");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value ="";
    store()
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
        store()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        store()
    }
},false);



input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
   
        addTask();
    }
});



function store(){
localStorage.setItem("content",list.innerHTML);
}
function display(){
    list.innerHTML = localStorage.getItem("content");
}
display()
