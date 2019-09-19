
/*
1. Función que muestra y esconde la sección para hacer comentarios 
   al hacer click el botón 'Escribe una reseña'. 
   on click!
   (5 puntos)
*/

let reseña = document.getElementById("seccion_comentario")

reseña.classList.add('hidden')

let btn_reseña = document.getElementById('escribe_reseña')

btn_reseña.addEventListener('click', function() {
  reseña.classList.toggle('hidden')
})


/*
2. Cargar los comentarios de el archivo comentarios.xml o bien de 
  https://tc2026daw.github.io/instrucciones/misc/comentarios.xml 
  (función ajax, 25 puntos)
*/
$.ajax({
  url : 'https://tc2026daw.github.io/instrucciones/misc/comentarios.xml',
  type : 'GET',
  dataType : 'xml',
  success: function(data) {
    console.log(data)

    let newHtml = ''

    $(data).find('comment').each(function() {
      newHtml += `
        <div class='review'>
          <div class='nombre'>
            ${$(this).find('name').text()}
          </div>
          <div class='rating'>
            ${getStarsSpans(`${$(this).find('stars').text()}`)}
          </div>
          <div class='review star-cointainer'>
            ${$(this).find('text').text()}
          </div>
        </div>
      `
    })

    console.log(newHtml)

    $('#seccion_reviews').append(newHtml)

  },
  error: function(errorMsg) {
    console.log(errorMsg)
  }
})


/*
3. Funcion que apendiza el nuevo comentario al darle click a PUBLICAR
  on click!
  (función, 35 puntos)
*/

let btn_publicar = document.getElementById('btn-publicar')
let error_comment = document.getElementById('error_comment')

error_comment.classList.add('hidden')

btn_publicar.addEventListener('click', function() {
  let nombre = document.getElementById('nombre')
  let email = document.getElementById('email')
  let comentario = document.getElementById('comentario')
  
  let flag = false

  if (nombre.value == ""){
    error_comment.classList.remove('hidden')
    flag = false
  } else {
    error_comment.classList.add('hidden')
    flag = true

    var div_nombre = document.createElement("div");
    div_nombre.textContent = nombre.value
  }

  if (email.value == ""){
    error_comment.classList.remove('hidden')
    flag = false
  } else {
    error_comment.classList.add('hidden')
    flag = true

    var div_email = document.createElement("div");
    div_email.textContent = email.value
  }

  if (comentario.textContent === "" ){
    error_comment.classList.remove('hidden')
    flag = false
  } else {
    error_comment.classList.add('hidden')
    flag = true

    var div_comment = document.createElement("div");
    div_comment.id = "comentario";
    div_comment.append(comentario.textContent)

  }

  let seccion_reviews =  document.getElementById('seccion_reviews')
  if(flag){

    seccion_reviews.append(div_nombre)
    seccion_reviews.append(div_email)
    seccion_reviews.append(div_comment)

    flag = false

    nombre.value = ""
    email.value = ""
    comentario.textContent = ""
  }
  

})


/*
4. Funcion que limpia el nombre, el email y el div "#comentarios" al darle
   click en "btn-limpiar" con leyenda de "CANCELAR"
   on click!
  (5 puntos)
*/

let btn_cancelar = document.getElementById('btn-limpiar')

btn_cancelar.addEventListener('click', function() {

  nombre.value = ""
  email.value = ""
  comentario.textContent = ""
})


/*
Funcion que recibe un numero de stars y regresa los 5 spans 
que simbolizan las estrellas del rating. por ejemplo:
let stars = 3;
let html = getStarsSpans(stars);

html = '
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
'
*/
function getStarsSpans(stars) {
  let new_html = '';
  for( let i = 0; i < stars; i++) {
    new_html += `
      <span class="fa fa-star checked"></span>
    `;
  }

  for ( let i = 0; i < 5 - stars; i++ ) {
    new_html += `
      <span class="fa fa-star"></span>
    `;
  }

  return new_html;
}
