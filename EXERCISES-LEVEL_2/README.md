# EJERCICIOS - NIVEL 1
Este repositorio contiene ejercicios diseñados para practicar conceptos básicos de JavaScript, como tipos de variables, condicionales, operadores lógicos y aritméticos, y más. Cada problema aborda un caso práctico que puede ser implementado paso a paso siguiendo las instrucciones.

## REQUERIMIENTOS
- Conocimiento de tipos de variables (números, cadenas, booleanos).
- Uso de condicionales (`if`, `else`, `switch`).
- Comprensión de operadores lógicos y aritméticos.

## EJERCICIOS

### **Problema A: Control de Entrada a la Fiesta**
- **Descripción:** Diseña un programa que permita la entrada a una fiesta únicamente a personas mayores de 18 años. Además, la primera persona en llegar después de las 2 AM no pagará entrada.

```js
const pagar = (time) => {
  if (time > 2) alert("Usted puede pasar");
  else alert("El costo de la entrada es de 15$");
};
let time = 0;
while (time <= 24) {
  let respuesta = prompt(`HORA : ${time}\n¿Cual es tu edad?`);
  if (respuesta >= 18) pagar(time);
  else alert("No puede pasar, usted es menor de edad");
  time++;
}
```

---

### **Problema B: Registro de Asistencia**
- **Descripción:** Diseña un programa que registre la asistencia de estudiantes durante 30 días. Si un estudiante tiene más del 10% de ausencias, será desaprobado.

```js
let clase = {
  luis: 0,
  pepe: 0,
  viljem: 0,
  subaru: 0,
  rem: 0,
};

const asistencia = (name) => clase[`${name}`]++;
const imprimir_asistencia = () => {
  for (let alumno in clase) {
    let state = "aprobado";
    if (clase[`${alumno}`] / 30 > 0.1) state = "desaprobado";
    document.write(`<br>nombre: ${alumno} - asistencia: ${clase[`${alumno}`]} - estado: ${state}`);
  }
};

// Simulación de asistencia
for (let x = 0; x < 15; x++) asistencia("rem");
imprimir_asistencia();
```

---

### **Problema C: Calculadora Básica**
- **Descripción:** Crea una calculadora con funciones básicas: suma, resta, multiplicación y división. Permite al usuario seleccionar la operación y proporcionar los números a operar.

```js
const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

stuart:
while (true) {
  let opcion = prompt("Ingresa la operación:\n1. SUMA\n2. RESTA\n3. DIVISIÓN\n4. MULTIPLICACIÓN\n5. SALIR");
  if (opcion == 5) {
    document.write(`<br>Saliendo de la calculadora`);
    break;
  }
  let number1 = parseInt(prompt("Ingrese el primer número para operar"));
  let number2 = parseInt(prompt("Ingrese el segundo número para operar"));
  switch (parseInt(opcion)) {
    case 1:
      alert(`La suma de los números es ${suma(number1, number2)}`);
      break;
    case 2:
      alert(`La resta de los números es ${resta(number1, number2)}`);
      break;
    case 3:
      alert(`La división de los números es ${division(number1, number2)}`);
      break;
    case 4:
      alert(`La multiplicación de los números es ${multiplicacion(number1, number2)}`);
      break;
    default:
      document.write(`<br>Opción no válida`);
  }
}
```

---

## EXTRA
> **Operadores Aritméticos**

| **OPERADOR** | **DESCRIPCIÓN**                             | **NÚMERO** | **CADENA** |
|--------------|---------------------------------------------|------------|------------|
| `+`          | Suma números o concatena cadenas           | ✔          | ✔          |
| `-`          | Resta números                              | ✔          | X          |
| `*`          | Multiplica números                         | ✔          | X          |
| `/`          | Divide números                             | ✔          | X          |
| `%`          | Resto de división                          | ✔          | X          |
| `**`         | Potenciación                               | ✔          | X          |
| `++`         | Incrementa en 1                            | ✔          | X          |
| `--`         | Decrementa en 1                            | ✔          | X          |
| `+=`         | Suma o concatena con el valor existente     | ✔          | ✔          |
| `-=`         | Resta al valor existente                   | ✔          | X          |
| `*=`         | Multiplica con el valor existente          | ✔          | X          |
| `/=`         | Divide el valor existente                  | ✔          | X          |
| `%=`         | Resto de división al valor existente       | ✔          | X          |

> **Entrada del Usuario:** Usa `prompt()` para capturar valores proporcionados por el usuario.
```js
let datoUsuario = prompt("Ingrese un dato");
```

> **Backticks:** Para interpolar variables en cadenas, usa template literals:
```js
let nombre = "Juan";
document.write(`Hola ${nombre}, ¡bienvenido!`);
```

---

## DESCRIPCIÓN GENERAL
Este conjunto de ejercicios busca consolidar conceptos básicos de JavaScript mediante problemas prácticos aplicables a situaciones reales. ¡Prueba resolverlos en menos de 5 minutos cada uno y mejora tu lógica de programación! 😊

