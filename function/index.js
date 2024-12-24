
//Una funcion es una abstraccion de un bloque de codigo del sistemas
//Calculadora
//SUMA
function sumas (num1, num2) {
  return num1 + num2;
}
//RESTA
function restas (num1, num2) {
  return num1 - num2;
}
//IMPRIMIR RESULTADOS
document.write("<hr>");
document.write("SUMA : " + sumas(1,2));
document.write("<br>");
document.write("RESTA : " + restas(5,3));

//Una funcion flecha es una abstraccion de la definicion de una funcion en JS
const suma = (num1,num2) => num1 + num2;
const resta = (num1,num2) => num1 - num2;
//IMPRIMIR RESULTADOS
document.write("<hr>");
document.write("SUMA : " + suma(1,2));
document.write("<br>");
document.write("RESTA : " + resta(5,3));
document.write("<hr>");
