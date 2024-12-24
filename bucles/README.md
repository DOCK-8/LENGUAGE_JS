# CONTROL DE FLUJOS EN JAVASCRIPT

En este documento exploraremos diferentes estructuras de control de flujo en JavaScript, utilizando ejemplos prácticos que muestran cómo funcionan. Estas estructuras incluyen `while`, `do while`, `for`, `for in`, `for of`, y el manejo de `continue` y `break`.

---

## 1. WHILE
El bucle `while` se utiliza para ejecutar un bloque de código mientras una condición sea verdadera.

### Ejemplo:
```javascript
let number = 0;
document.write("<hr><p>WHILE</p>");

while(number <= 5){
  document.write(`number : ${number}<br>`);
  number++;
}
```
> Este código imprime los números del 0 al 5.

---

## 2. DO WHILE
El bucle `do while` es similar a `while`, pero siempre ejecuta el bloque de código al menos una vez, ya que la condición se evalúa al final.

### Ejemplo:
```javascript
number = 12;
document.write("<hr><p>DO WHILE</p>");

do{
  document.write(`number : ${number}<br>`);
  number++;
}while(number <= 15);
```
> Este código imprime los números del 12 al 15.

---

## 3. FOR
El bucle `for` se utiliza para iterar un bloque de código un número determinado de veces.

### Ejemplo:
```javascript
for(let number = 5; number <= 9; number++){
  document.write(`number : ${number}<br>`);
}
```
> Este código imprime los números del 5 al 9.

---

## 4. FOR IN
El bucle `for in` itera sobre las propiedades o índices de un objeto o array.

### Ejemplo:
```javascript
let array = [1, 2, 22, "goku"];
document.write("<hr>");

for (let x in array){
  document.write(x + "<br>");
}
```
> Este código imprime los índices del array: 0, 1, 2, y 3.

---

## 5. FOR OF
El bucle `for of` itera sobre los valores de un objeto iterable, como un array.

### Ejemplo:
```javascript
for (let x of array){
  document.write(x + "<br>");
}
```
> Este código imprime los valores del array: 1, 2, 22, y "goku".

---

## 6. CONTINUE Y BREAK
Estas palabras clave permiten controlar el flujo de un bucle:
- `continue` salta a la siguiente iteración del bucle.
- `break` termina el bucle de inmediato.

### Ejemplo:
```javascript
let x = [1, [10, 20, 30], 3, 4, 5, 6];
document.write("<hr><p>CONTINUE-BREAK</p>");

for(let num in x){
  if(num == 1){
    for(let y of x[num]){
      document.write(`${y}<br>`);
      if(y % 4 == 0)
        break;
    }
    continue;
  }
  document.write(`${x[num]}<br>`);
}
```
> Este código imprime los valores del array `x`, desglosando el subarray en el índice 1 y deteniendo la iteración interna cuando el valor es divisible entre 4.

---

## IMAGEN DE EJECUCIÓN

<img src="img/A.png">

> Esta imagen ilustra la salida generada por el código. Ayuda a entender cómo se comportan los bucles y el uso de `continue` y `break` en la práctica.


