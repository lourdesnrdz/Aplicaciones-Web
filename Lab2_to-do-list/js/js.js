
let newitem = document.getElementById('newitem')
let elements = document.getElementsByName('todo')
let todolist = document.getElementById("todolist")
let mynodelist = document.getElementsByTagName("LI")

/*
newitem.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   console.log("hello world");
   let node = document.createElement("LI");
   let text = document.createTextNode(newitem.text);
   node.type = "checkbox";
   node.appendChild(text);
   todolist.appendChild(node);
  }
});
*/

newitem.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   console.log("hello world");
   var node = document.createElement("LI");
   var input = document.createElement("INPUT");
   var span = document.createElement("SPAN");
   var text = document.createTextNode(newitem.value);
   input.type = "checkbox";
   input.name = "todo";
   if(newitem.value === ""){
   		alert("Tienes que escribir algo");
   } else {
	   	span.appendChild(text);
	    //input.appendChild(text);
	    node.appendChild(span);
	    todolist.appendChild(node);
	    newitem.value = "";
   }
  }
});



/*
todolist.addEventListener ('click', function() {
	for ( i = 0; i < elements.length; i++ ) {
		if( elements[i].checked) {
			todolist.classList.toggle("done");
			console.log("hola");
		}
	}
})
*/

var list = document.getElementsByTagName("li");
for(var i=0; i<list.length; i++){
 list[i].addEventListener("click", liClick);
}
function liClick(){
  this.classList.toggle("done");
}