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



///////PASO 2 ///////////////

let tituloPelicula= document.querySelector("#titulo")
let secreto=0

tituloPelicula.addEventListener("keypress",(e)=>{
    if(secreto==0 && e.key=="s"){
        secreto=1
    }
    if(secreto==1 && e.key=="e"){
        secreto=2
    }
    if(secreto==2 && e.key=="c"){
        secreto=3
    }
    if(secreto==3 && e.key=="r"){
        secreto=4
    }
    if(secreto==4 && e.key=="e"){
        secreto=5
    }
    if(secreto==5 && e.key=="t"){
        secreto=6
    }
    if(secreto==6 && e.key=="o"){
    
        alert("SECRETO MAGICO")
        secreto=0
    } 
  


})


}