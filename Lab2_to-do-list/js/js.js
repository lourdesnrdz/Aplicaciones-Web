
let newitem = document.getElementById('newitem')
let elements = document.getElementsByName('todo')
let todolist = document.getElementById("todolist")


//Agregar elemento a la lista
newitem.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   var li = document.createElement("li");
   var input = document.createElement("input");
   var span = document.createElement("span");
   var text = document.createTextNode(newitem.value);
   input.type = "checkbox";
   input.name = "todo";
   input.value	= elements.length +1;
   span.setAttribute('name', "e");
   //verifica que el nuevo elemento no está vacío
   if(newitem.value === ""){
   		//si está vacio manda una alerta
   		alert("Tienes que escribir algo");
   } else {
   		//sino lo agrega a la lista
	   	span.appendChild(text);
	    li.appendChild(input);
	    li.appendChild(span);
	    todolist.appendChild(li);
	    newitem.value = "";
   }
  }
});

//verifica si están checked y los cruza
todolist.addEventListener('click', function checkedElement() {
	let e = document.getElementsByName('e')

	for (let i = 0; i < elements.length; i++) {
	    if (elements[i].checked) {
	      	e[i].classList.add('done');
	    } else {
	      	e[i].classList.remove('done');
	    }
	}
})
