function sayHello(){
  console.log("hello!");
}
document.querySelector('#generate-greeting').addEventListener('click', sayHello);

function addToDo(){
  const text = document.querySelector("#new-todo").value;
  const newItem = document.createElement('li');
  newItem.innerText = text;
  newItem.onclick = function(e){
    e.target.style["text-decoration"] = "line-through";
  }
  document.querySelector('.todos').appendChild(newItem);
  document.querySelector("#new-todo").value = null;
}
document.querySelector("#generate-todo").addEventListener('click', addToDo)
