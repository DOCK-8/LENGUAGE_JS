# VARIABLE SCOPE

En JavaScript, las variables son muy versátiles. Con la llegada de **ES6 (ECMAScript 2015)**, se introdujeron dos nuevas formas de declarar variables: ***let*** y ***const***. Estas complementan al ya existente ***var***. Es importante conocer sus diferencias para aprovechar mejor su alcance (*scope*).

| **Tipo** | **Descripción** |
|----------|-----------------|
| **var**  | Es como el árbitro que tiene libertad para moverse por toda la cancha (ámbito global o de función). Sin embargo, puede causar problemas porque no respeta los límites de bloque. |
| **let**  | Es como un jugador de fútbol que está restringido a una zona específica (ámbito de bloque), como si el árbitro de línea controlara su posición. |

---

# EXAMPLE

A continuación, un ejemplo visual para entender mejor las diferencias entre `var` y `let`:

<img src="varLetImage.png" alt="Ejemplo visual del comportamiento de var y let en JavaScript">

---

# SUGERENCIA

Ahora que conoces la diferencia entre `var` y `let`, recuerda:

> **Un gran poder conlleva una gran responsabilidad**  
> *(Ben Parker, adaptado por Dock, 2024)*

Así que usa `let` siempre que sea posible para evitar errores en tu código.

<img src="letImage.png" alt="Imagen motivacional para usar let en lugar de var">
