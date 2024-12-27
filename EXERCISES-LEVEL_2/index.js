//PROBLEMA A
// PROGRAMA que entrada a una fiesta, identifique a personas +18;
// ademas, de que la primera persona en llegar a las 2AM, no pagara. 
const pagar = (time) => {
  if(time > 2) alert("Usted puede pasar");
  else alert("El costo de la entrada es de 15$");
}
let time = 0;
while(time <= 24){
  let respuesta = prompt(`HORA : ${time}\n¿Cual es tu edad?`);
  if(respuesta >= 18) pagar();
  else alert("No puede pasar, usted es menor de edad");
  time++;
}
//PROBLEMA B
// PROGRAMA de registro de asistencia: presenta(P) y ausente(A), 
// luego de 30 dias, se muestra la situacion de asistencia. 
// para la asistencia luego de 10% de ausencia esta desaprobado.
let clase = {
  luis : 0,
  pepe : 0,
  viljem : 0,
  subaru : 0,
  rem : 0,
};
const asistencia = (name) => clase[`${name}`] ++;
const imprimir_asistencia = () => {
  for(let alumno in clase){
    let state = "aprobado";
    if(clase[`${alumno}`] / 30 <= 0.1) state = "desaprobado";
    document.write(`<br>nombre : ${alumno} - asistencia : ${clase[`${alumno}`]} - estado : ${state}`);
  }
}
//Bucle para simular la asistencia de cada dia para un estudiante
//en especifico
for(let x = 0; x < 15; x++)
  asistencia("rem");
imprimir_asistencia();
//PROBLEMA C
// PROGRAMA de una calculadora, que tenga funciones basicas, como: 
// suma, resta, multiplicacion y division.
const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

stuart:
while(true){
  let opcion = prompt("Ingresa la operacion:\n1.SUMA\n2.RESTA\n3.DIVISCION\n4.MULTIPLICACION")
  if(opcion == 5){
    document.write(`<br>Saliendo de la calculadora`);
    break;
  }
  let number1 = parseInt(prompt("Ingrese el primer numero para operar"));
  let number2 = parseInt(prompt("Ingrese el segundo numero para operar")); 
  switch(parseInt(opcion)){
    case 1:
      alert(`La suma de los numeros es ${suma(number1, number2)}`)
      break;
    case 2:
      alert(`La resta de los numeros es ${resta(number1, number2)}`)
      break;
    case 3:
      alert(`La division de los numeros es ${division(number1, number2)}`)
      break;
    case 4:
      alert(`La multiplicacion de los numeros es ${multiplicacion(number1, number2)}`)
      break;
    default:
      document.write(`<br>Opcion no valida`);
  }
}
