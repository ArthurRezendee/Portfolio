//maquina de escrever
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 71 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

 //toggle menu
 const toggle = document.getElementById('toggle');
 const menu = document.getElementById('menu');

 const navigationLinks = document.querySelectorAll(".list");

 navigationLinks.forEach(link => {
   link.addEventListener("click", () => {
     menu.classList.remove("active");
   });
 });

 toggle.addEventListener("click", () => {
   menu.classList.toggle("active");
 });

