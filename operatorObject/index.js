document.write(`<h2>STRINGS</h2>`);
/*
* OPERATOR ON STRING
*/
let cadena = new String("Hola laura y ");
document.write(`CADENA : ${cadena}`);
let x = new String(" Luchito");
//Metodo CONCAT(), es una funcion concatenar la cadena
//con otra
document.write(`<br>CADENA + x : ${cadena.concat(x)}`);
//Metodo STARTSWITH es para verificar el inicion de una
//cadena
document.write(`<br>EMPIEZA CON HO : ${cadena.startsWith("Ho")}`);
//Metodo ENDSWITH es para verificar el final de una
//cadena
document.write(`<br>TERMINA CON LA : ${cadena.endsWith("la")}`);
//Metodo INCLUDES es para verificar el existe una cadena 
//en la cadena
document.write(`<br>CONTIENE U : ${cadena.includes("u")}`);
//Metodo INDEXOF es para encontrar el primer indice de la cadena
//en la cadena
document.write(`<br>"LA" ESTA EN LA POSICION : ${cadena.indexOf("la")}`);
//Metodo LASTINDEXOF es para encontrar el ultimo indice de la cadena
//en la cadena
document.write(`<br>EL ULTIMO "LA" EN LA POSICION : ${cadena.lastIndexOf("la")}`);
//Metodo PADSTART es para rellenar al inicio la cadena a un indice 
//establecido con una cadena ingresada
document.write(`<br>20 CARACTERES : ${cadena.padStart(20," =)")}`);
//Metodo PADEND es para rellenar al final la cadena a un indice 
//establecido con una cadena ingresada
document.write(`<br>20 CARACTERES : ${cadena.padEnd(20," =)")}`);
//Metodo PADSTART es para repetir la cadena segun un indice 
document.write(`<br>2 REPETICIONES : ${cadena.repeat(2)}`);
//Metodo SPLIT es para dividir la cadena segun un argumento 
for(let x = 0; x<3; x++)
  document.write(`<br>${x+1} PARTE : ${cadena.split(" ")[x]}`);
//Metodo SUBSTRING es para recortar la cadena segun un parametro 
document.write(`<br>RECORTE [0-2] : ${cadena.substring(0,2)}`);
//Metodo TOLOWERCASE es para convertir a minuscula la cadena 
document.write(`<br>MINUSCULA : ${cadena.toLowerCase()}`);
//Metodo TOUPPERCASE es para convertir a mayuscula la cadena 
document.write(`<br>MAYUSCULA : ${cadena.toUpperCase()}`);
//Metodo TOSTRING es para convertir a string cualquier variable 
let number = 50;
document.write(`<br>CONVERT 5 -> STRING: ${number.toString()}`);
//Metodo TRIM es para eliminar espacios en blanco al inicio 
//y fin de la cadena 
let prueba = "      como estas       ";
document.write(`<br>LENGTH : ${prueba} == ${prueba.length}`);
document.write(`<br>AFTER LENGTH : ${prueba.trim()} == ${prueba.trim().length}`);
//Metodo TRIMSTART es para eliminar espacios en blanco al inicio 
//de la cadena 
document.write(`<br>AFTER LENGTH : ${prueba} == ${prueba.trimStart().length}`);
//Metodo TRIMEND es para eliminar espacios en blanco al fin
//de la cadena 
document.write(`<br>AFTER LENGTH : ${prueba} == ${prueba.trimEnd().length}`);
/*
* OPERATOR - ARRAY
*/
//Metodo POP, para extraer el ultimo elemento de un array,
//y luego retornarlo
document.write(`<h2>ARRAYS</h2>`);
let array = [1,2,3,4];
document.write(`<hr>${array}`);
document.write(`<hr>${array.pop()}`);
document.write(`<hr>${array}`);
//Metodo SHIFT, para extraer el primer elemento de una array,
//y luego retornarlo
document.write(`<hr>${array.shift()}`);
document.write(`<hr>${array}`);
//Metodo PUSH para agregar un elemento en la ultima instancia,
//del array
document.write(`<hr>${array.push("Nuevo_1")}`);
document.write(`<hr>${array}`);
//Metodo UNSHIFT para agregar un elemento en la primera instancia,
//del array
document.write(`<hr>${array.unshift("Nuevo_2")}`);
document.write(`<hr>${array}`);
//Metodo REVERSE para cambiar el orden del array
document.write(`<hr>${array.reverse()}`);
document.write(`<hr>${array}`);
//Metodo SORT para ordenar los elementos del array
document.write(`<hr>${array.sort()}`);
document.write(`<hr>${array}`);
//Metodo SPLICE para quitar o meter nuevos elementos al array
document.write(`<hr>${array.splice(0,0,-1,-2)}`);
document.write(`<hr>${array}`);
//Metodo JOIN para extraer todos los elementos del array
document.write(`<hr>${array.join("*-*")}`);
document.write(`<hr>${array}`);
//Metodo SLICE para extraer todos los elementos del array
document.write(`<hr>${array.slice(0,2)}`);
document.write(`<hr>${array}`);
array.push(2);
document.write(`<hr>${array}`);
//Metodo INDEXOF para encontrar el indice del elemento del array
document.write(`<hr>${array.indexOf(2)}`);
//Metodo LASTINDEXOF para encontrar el indice del ultimo elemento en array
document.write(`<hr>${array.lastIndexOf(2)}`);
//Metodo INCLUDES para extraer todos los elementos del array
document.write(`<hr>${array.includes(9)}`);
//Metodo FILTER para filtrar todos los elementos del array
//con un bucle
document.write(`<hr> ${array.filter(number => number > 0)}`);
//Metodo FOREACH para extraer todos los elementos del array, mediante un bucle
array.forEach(number => document.write(`<hr>${number}`));
/*
* OPERATOR - MATH
*/
//Metodo POP, para extraer el ultimo elemento de un array,
//y luego retornarlo
document.write(`<h2>MATH</h2>`);
//Metodo SQRT es para sacar la raiz cuadrada a un numero
document.write(`<hr> ${Math.sqrt(25)}`);
//Metodo CBRT es para sacar la raiz cubica a un numero
document.write(`<hr> ${Math.cbrt(8)}`);
//Metodo MAX es para sacar el numero mas grande
let numbers = [1,2,3,4];
document.write(`<hr> ${Math.max(...numbers)}`);
//Metodo MIN es para sacar el numero mas pequeño
document.write(`<hr> ${Math.min(...numbers)}`);
//Metodo RANDOM es para sacar un numero aleatorio [0-1]
document.write(`<hr> ${Math.random()}`);
//Metodo ROUND es para redondear un numero
document.write(`<hr> ${Math.round(Math.random()*100)}`);
//Metodo FROUND es para redondear un numero a una precion de 32
document.write(`<hr> ${Math.fround(Math.random()*100)}`);
//Metodo FLOOR es para redondear un numero hacia abajo
document.write(`<hr> ${Math.floor(Math.random()*100)}`);
//Metodo TRUNC es para eliminar los numeros decimales de un numero
document.write(`<hr> ${Math.trunc(Math.random()*100)}`);
//Metodo PÍ es para retornar el numero pi
document.write(`<hr> ${Math.PI}`);
//Metodo SQRT1_2 es para retornar la raiz cuadrada de 1/2
document.write(`<hr> ${Math.SQRT1_2}`);
//Metodo SQRT2 es para retornar la raiz cuadrada de 2
document.write(`<hr> ${Math.SQRT2}`);
//Metodo E es para retornar el numero de euler
document.write(`<hr> ${Math.E}`);
//Metodo LN2 es para retornar el numero de euler
document.write(`<hr> ${Math.LN2}`);
//Metodo LN10 es para retornar el numero de euler
document.write(`<hr> ${Math.LN10}`);
//Metodo LOG2E es para retornar el numero de euler
document.write(`<hr> ${Math.LOG2E}`);
//Metodo LOG10E es para retornar el numero de euler
document.write(`<hr> ${Math.LOG10E}`);
