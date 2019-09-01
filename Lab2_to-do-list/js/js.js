
let newitem = document.getElementById('newitem')
let elements = document.getElementsByName('todo')
let todolist = document.getElementById("todolist")


//Agregar elemento a la lista
newitem.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   console.log("hello world");
   var node = document.createElement("li");
   var input = document.createElement("input");
   var span = document.createElement("span");
   var text = document.createTextNode(newitem.value);
   input.type = "checkbox";
   input.name = "todo";
   input.value	= elements.length +1;
   span.setAttribute('name', "e");
   if(newitem.value === ""){
   		alert("Tienes que escribir algo");
   } else {
	   	span.appendChild(text);
	    node.appendChild(input);
	    node.appendChild(span);
	    todolist.appendChild(node);
	    newitem.value = "";
   }
  }
});


todolist.addEventListener('click', function checkedElement() {
  let e = document.getElementsByName('e')

  for (let i = 0; i <elements.length; i++) {
    if (elements[i].checked) {
      e[i].classList.add('done');
    } else {
      e[i].classList.remove('done');
    }
  }
})
