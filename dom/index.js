//Funcion para retornar elementos por su ID
let des = document.getElementById("descriptionPag");
//Funcion para retorno elmentos por su TAG
let titulo = document.getElementsByTagName("h1");
//Funcion para retornar elementos por su SINTAXIS
let texto = document.querySelector(".text");
//Funcion para retornar un grupo de elementos por su SINTAXIS
let textos = document.querySelectorAll(".text");
//Funcion para ver el atributo de un nodo
console.log(des.getAttribute("id"));
//Funcion para editar el atributo de un nodo
titulo[0].setAttribute("style","color: white;");
//Funcion para eliminar el atributo de un nodo
titulo[0].removeAttribute("style");
/*
ATRIBUTOS
*/
//Atributo HIDDEN es para desaparecer un nodo
titulo[0].setAttribute("hidden","false");
//Atributo TITLE es para describir un nodo
des.setAttribute("title","Descripcion de la pagina");
//Atributo style me permite editar los estilos de nodo
des.setAttribute("style","color : #555");
//Atributo TABINDEX para enumerar elementos,
//seleccionados con el tab
let aux = [...textos];
for(let x in aux)
  aux[x].setAttribute("tabindex",`${x}`);
//Atributo DIR para modificar la direccion del texto
des.setAttribute("dir","rtl");
//Atributo CONTENTEDITABLE para la edicion del contenido
texto.setAttribute("contenteditable","true");
/*
INPUT
*/
let input = document.getElementById("inputSearch");
//Atributo CLASSNAME es el valor de class
document.write(`<hr>${input.className}`);
//Atributo VALUE es el valor de el contenido del input
document.write(`<hr>${input.value}`);
//Atributo TYPE es el tipo de input
document.write(`<hr>${input.type}`);
//Atributo ACCEPT es para aceptar un tipo de archivo
input.type = "file";
input.accept = "image/png";
//Atributo FORM es para relacionar algunos input con
//otros formularios
let button = document.querySelector(".buttonBuy");
button.setAttribute("form","searchForm");
//Atributo MINLENGTH, para validar el tamaño de cadenas
input.type = "text";
input.minLength = "4";
//Atributo PLACEHOLDER, es un tipo de texto previo en
//los input
input.placeholder = "Buscar";
//Atributo REQUIRED, para hacer que un nodo, en un
//input sea requerido
input.required = "true";
//Atributo STYLE, usa el atributo de estilos del nodo
button.style.color = "white";
//Atributo CLASSLIST, metodo para trabajar con clases.
//cada nodo usa el atributo CLASS
//Funcion ADD(), le agrega una clase al nodo
button.classList.add("buy");
button.classList.add("buys");
button.classList.add("boy");
//Funcion REMOVE(), le quita la clase al nodo
button.classList.remove("buys")
//Funcion ITEM(), nombre de la clase en ese indice
console.log(button.classList.item(2));
//Funcion CONTAINS(), verifica si tiene esa clase
document.write("<hr>");
if(button.classList.contains("boy"))
  document.write("Contiene la clase mencionada");
else
  document.write("No contiene la clase mencionada");
//Funcion REPLACE(), reemplaza una clase por otra;
button.classList.replace("boy","boys");
//Funcion TOGGLE(), elimina o agrega segun
//este una clase o no en el nodo
button.classList.toggle("boys");
/*
MODIFICACION DE ELEMENTOS
*/
//Atributo TEXTCONTENT, devuelve el contenido del
//elemento
// alert(document.querySelector(".video").textContent);
//Atributo INNERHTML, deavuelve el contenido con
//las etiquetas html
// alert(document.querySelector(".video").innerHTML);
//Atributo OUTERHTML, deavuelve el contenido con
//las etiquetas html, includido la que los contiene
// alert(document.querySelector(".video").outerHTML);
/*
CREACION DE ELEMENTOS
*/
let carta = document.querySelector(".video");
//Funcion CREATEELEMENT, crea un nuevo nodo con la}
//etiqueta especificada
let but = document.createElement("INPUT");
but.setAttribute("form","searchForm");
but.className = "buy";
but.type = "submit";
but.value = "Reservar";
document.querySelector(".buttonsBuyReser").appendChild(but);
//Funcion CREATEDOCUMENTFRAGMENT, carga de elementos
//para evitar la iteracion
let carga = document.createDocumentFragment();
for(let x = 0; x < 4; x++){
  let button = document.createElement("INPUT");
  button.className = "buy";
  button.classList.add("borrar");
  button.type = "submit";
  button.value = `${x}`;
  let parrafo = document.createElement("P");
  parrafo.className = "borrar";
//Funcion CREATETEXTNODE, carga un elemento de texto
//para incluirlo en el nodo
  parrafo.appendChild(document.createTextNode("Nuevo button"));
  carga.appendChild(button); 
  carga.appendChild(parrafo);
}
//Funcion APPENDCHILD, agrega nuevos nodos en el nodo,
//especifico.
console.log("%cINICIO","color: green");
console.log(carga.childNodes);
console.log("%cFIN","color: green");
document.querySelector(".buttonsBuyReser").appendChild(carga);
/*
PROPIEDADES DE NODOS
*/
//Atributo : primer nodo [X type]
console.log(carta.firstChild);
//Atributo : ultimo nodo [X type]
console.log(carta.lastChild);
//Atributo : primer elemento HTML
console.log(carta.firstElementChild);
//Atributo : ultimo elemento HTML
console.log(carta.lastElementChild);
//Atributo : NodeList de los nodos [X type]
console.log(carta.childNodes);
//Atributo : HTMLcollection de los elementos HTML
console.log(carta.children);
/*
MODIFICACION
*/
//Funcion REMOVECHILD(), para remover nodos hijos
let padre = document.querySelector(".buttonsBuyReser");
document.querySelectorAll(".borrar").forEach( ele => {
  padre.removeChild(ele);
});
let nuwP = document.createElement("P");
nuwP.appendChild(document.createTextNode("description"))
nuwP.className = "text";
let ant = document.querySelector(".descriptioVideo");
padre = document.querySelector(".description");
//Funcion REPLACECHILD(), para reemplazar con el nuevo
//nodo, el seleccionado
padre.replaceChild(nuwP,ant); 
//Funcion HASCHILDNODES(), para verificar la existencia
//de nodos hijos
if(padre.hasChildNodes()){
  console.log("%cSI TIENE HIJOS","color: #13f");
}
//Atributo PARENTNODE, nos devuelve el nodo padre
console.log("%cNODO","color: #4f5");
console.log(texto.parentNode);
//Atributo PARENTELEMENT, nos devuelve el elemento padre
console.log("%cELEMENT","color: #8f5");
console.log(texto.parentElement);
//ATRIBUTOS DE HERMANOS
//Atributo NEXTSIBLING, nos devuelve el nodo hermano
//siguiente
let main = document.querySelector("main");
console.log(main.nextSibling);
//Atributo PREVIUSSIBLING, nos devuelve el nodo hermano
//previo
console.log(main.previusSibling);
//Atributo NEXTELEMENTSIBLING, nos devuelve elemento hermano
//siguiente
console.log(main.nextElementSibling);
//Atributo PREVIUSELEMENTSIBLING, nos devuelve elemento hermano
//previo
console.log(main.previusElementSibling);
//Funcion CLOSEST, devuelve el elemento superior mas cerca
//al argumento
console.log(main.closest("body"));
