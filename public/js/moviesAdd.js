window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

let agregar= document.querySelector(".botonAgregar")

agregar.addEventListener("mouseover",(e)=>{
    agregar.style.backgroundColor = "red"
    agregar.style.color= "white"
   /*  agregar.classList.toggle("botonAgregar2") */

})
agregar.addEventListener("mouseout",(e)=>{
    agregar.style.backgroundColor = "green"
    agregar.style.color = "white"
})

}