// let numeroMaquina = Math.floor(Math.random()*(10 - 1)) + 1;
// console.log( numeroMaquina);

// let vidas = 3

// let numeroUsuario = parseInt( prompt( " Trata de adivinar él número , del 1 al 10 , tienes tres vidas, SUERTE ,,,,"));

// while(numeroMaquina !== numeroUsuario && vidas > 1){

//     let mensaje = ( numeroMaquina > numeroUsuario) ? `El número es mayor ` : `El número es menor `

//     console.log( " ése no es ,   " + mensaje);
//     numeroUsuario = parseInt( prompt( " Trata de adivinar él número , del 1 al 10 SUERTE ,,,, " + mensaje));
//     vidas--

// }


// if( numeroMaquina === numeroUsuario) {
//     console.log( " Ganaste!!!!!😎");
// }else{
//     console.log(" será la próxima 🤪");
// }

// acá agregamos "push" que lo que hace es agregar un elemento al final del array

// const frutas = ["pera", "manzana"];

// frutas.push("banana");

// console.log(frutas);

//  acá agregamos " unshift " lo que hace es agregar un elemento al primcipio de el array

// const frutas = ["pera", "manzana"];

// frutas.unshift("banana");

// console.log(frutas);

// POP hace que elminimen el último elemento del array 

// const frutas = ["pera", "manzana"];

// frutas.pop();

// console.log(frutas);

// shift elimina el primer elemento del array , pero puedes mostrar el elemento eliminado 

// const frutas = ["pera", "manzana"];

// const frutaEliminada =  frutas.shift();

// console.log(frutas);
// console.log(frutaEliminada);

// ahora vamos a hacer un carrito de compras en donde vamos a pedir que se vallan agregando a un array cada elemeno que vallamos diciendo 

// const frutas = [];
// const fruta = prompt("🍏 "+"Fruta Market "+" 🍉" + " ¿ Qué Fruta deceas comprar ?");
// frutas.push(fruta);

// while(confirm(" Deceas agregar otro elemento al"+" 🗑 ?")){
//      const fruta =prompt(" Qué fruta deceas agregar ?" );
//      frutas.push(fruta);
// }

// console.log(" compraste : ");
 
// for(const fruta of frutas){
//     console.log(fruta);
// }

//  ahora vamos a interferir en los documentod de HTML desde JavaScript



// h1.textContent = " Nuevo texto desde JS";
// h1.style.backgroundColor = "red ";
// h1.style.color = " white";

// const h1 =  document.getElementById("tituloweb");

// const boton = document.querySelector(".btn-primary");

// boton.addEventListener("click",() => {
//     console.log("me diste click");
//     h1.textContent = " texto desde JS";
//     h1.style.color = " blue";
    
// });

//  ahora vamos a modificar eventos en html con las funciones de JS

// const inputColor = document.querySelector("#inputColor");
// const btnVisualizar = document.querySelector("#btnVisualizar");
// const parrafoExa = document.querySelector("#parrafoExa");
// const cardColor = document.querySelector("#cardColor");

// btnVisualizar.addEventListener("click", () => {
    
// console.log("me diste click");
// console.log( inputColor.value);
// parrafoExa.textContent = inputColor.value;
// cardColor.style.backgroundColor= inputColor.value;

// })


// ahora vamos a agregar elementoso con creatElement en el DOM

// const carrito = document.getElementById("carrito")
// const template = document.getElementById("template")
// const fragment = document.createDocumentFragment()
// const btnesBotones = document.querySelectorAll(".card .btn")

// const carritoObjeto = {} ;  

// const agregarAlCarrito =(e) => {
// console.log(e.target.dataset.fruta)

// const producto = {
//     titulo:e.target.dataset.fruta,
//     id:e.target.dataset.fruta,
//     cantidad:1
// }

// if(carritoObjeto.hasOwnProperty(producto.titulo)){
//     producto.cantidad= carritoObjeto[producto.titulo].cantidad +1;
// };
// carritoObjeto[producto.titulo] = producto;

// pintarCarrito(producto);

// };

// const pintarCarrito = () =>{
//     carrito.textContent = " ";
//     Object.values(carritoObjeto).forEach( (item) =>{
//         const clone = template.content.firstElementChild.cloneNode(true);
//         clone.querySelector(".lead").textContent = item.titulo;
//         clone.querySelector(".badge").textContent = item.cantidad;

//         fragment.appendChild(clone);
//     });

//     carrito.appendChild(fragment);
// };


//  btnesBotones.forEach ((btn) => btn.addEventListener ("click",agregarAlCarrito ));


const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

formulario.addEventListener("submit", e => {
    e.preventDefault();

    console.log(userName.value);
    console.log( userEmail.value);

})























