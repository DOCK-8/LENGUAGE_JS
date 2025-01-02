# Operadores y Métodos en Strings, Arrays y Math en JavaScript

Este documento explica el uso de operadores y métodos clave en **strings**, **arrays**, y la biblioteca **Math** de JavaScript, mostrando ejemplos prácticos y funcionales para entender su aplicación.

---

## **Strings**
Los strings en JavaScript ofrecen múltiples métodos para manipular y operar sobre cadenas de texto. A continuación, se describen algunos de los más comunes:

| **Método**          | **Descripción**                                         | **Ejemplo**                                                                                                                                  |
|---------------------|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `concat()`          | Concatena dos cadenas.                                | `"Hola".concat(" Mundo")` → "Hola Mundo"                                                                                              |
| `startsWith()`      | Verifica si comienza con un texto específico.         | `"Hola Mundo".startsWith("Hola")` → `true`                                                                                            |
| `endsWith()`        | Verifica si termina con un texto específico.          | `"Hola Mundo".endsWith("Mundo")` → `true`                                                                                            |
| `includes()`        | Comprueba si contiene un texto.                       | `"Hola Mundo".includes("Mund")` → `true`                                                                                             |
| `indexOf()`         | Encuentra la posición de la primera aparición.        | `"Hola Mundo".indexOf("o")` → `1`                                                                                                    |
| `padStart()`        | Rellena la cadena al inicio hasta una longitud.       | `"5".padStart(3, "0")` → "005"                                                                                                    |
| `padEnd()`          | Rellena la cadena al final hasta una longitud.        | `"5".padEnd(3, "0")` → "500"                                                                                                    |
| `repeat()`          | Repite la cadena un número de veces.                 | `"Hola ".repeat(3)` → "Hola Hola Hola "                                                                                            |
| `split()`           | Divide una cadena en un array.                        | `"a,b,c".split(",")` → `["a", "b", "c"]`                                                                                       |
| `toUpperCase()`     | Convierte a mayúsculas.                               | `"hola".toUpperCase()` → "HOLA"                                                                                                     |
| `toLowerCase()`     | Convierte a minúsculas.                               | `"HOLA".toLowerCase()` → "hola"                                                                                                     |

---

## **Arrays**
Los arrays son estructuras de datos que almacenan múltiples valores. A continuación, se listan métodos importantes:

| **Método**          | **Descripción**                                         | **Ejemplo**                                                                                                  |
|---------------------|-------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `pop()`             | Elimina y retorna el último elemento.                 | `[1, 2, 3].pop()` → `3`, `[1, 2]`                                                                            |
| `shift()`           | Elimina y retorna el primer elemento.                 | `[1, 2, 3].shift()` → `1`, `[2, 3]`                                                                          |
| `push()`            | Añade un elemento al final.                           | `[1, 2].push(3)` → `[1, 2, 3]`                                                                               |
| `unshift()`         | Añade un elemento al inicio.                          | `[2, 3].unshift(1)` → `[1, 2, 3]`                                                                            |
| `reverse()`         | Invierte el orden de los elementos.                   | `[1, 2, 3].reverse()` → `[3, 2, 1]`                                                                          |
| `sort()`            | Ordena los elementos.                                 | `[3, 1, 2].sort()` → `[1, 2, 3]`                                                                             |
| `splice()`          | Añade o elimina elementos.                            | `[1, 2, 4].splice(2, 0, 3)` → `[1, 2, 3, 4]`                                                                 |
| `filter()`          | Filtra elementos según una condición.                 | `[1, 2, 3, 4].filter(num => num > 2)` → `[3, 4]`                                                             |

---

## **Math**
La biblioteca Math proporciona métodos y propiedades útiles para realizar cálculos matemáticos.

| **Método**          | **Descripción**                                         | **Ejemplo**                                                                                                   |
|---------------------|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| `Math.sqrt()`       | Calcula la raíz cuadrada.                              | `Math.sqrt(16)` → `4`                                                                                         |
| `Math.random()`     | Genera un número aleatorio entre 0 y 1.               | `Math.random()` → Ejemplo: `0.345...`                                                                         |
| `Math.max()`        | Retorna el mayor número de un conjunto.               | `Math.max(1, 5, 3)` → `5`                                                                                     |
| `Math.min()`        | Retorna el menor número de un conjunto.               | `Math.min(1, 5, 3)` → `1`                                                                                     |
| `Math.round()`      | Redondea al entero más cercano.                       | `Math.round(4.7)` → `5`                                                                                       |
| `Math.PI`           | Valor de Pi.                                          | `Math.PI` → `3.141592...`                                                                                     |

---

## Notas Finales
Este archivo es una referencia práctica para entender y utilizar los métodos más comunes en **strings**, **arrays**, y **Math** en JavaScript. Experimenta con estos ejemplos en tu consola o editor para profundizar tu comprensión.
