# Guía de Ejercicios: Strings, Arrays, Math y Programación Orientada a Objetos en JavaScript

Este documento presenta una serie de ejercicios diseñados para practicar conceptos fundamentales en JavaScript, como strings, arrays, métodos matemáticos y programación orientada a objetos.

---

## **Problema A: Calculadora**
**Objetivo**: Crear una calculadora que implemente las operaciones básicas: suma, resta, multiplicación, división, potencia y raíz cuadrada.

### Instrucciones:
1. Diseña una clase llamada `Calculadora`.
2. Implementa un método para cada operación matemática básica:
   - **Suma**: Recibe dos números y retorna su suma.
   - **Resta**: Recibe dos números y retorna su diferencia.
   - **Multiplicación**: Recibe dos números y retorna su producto.
   - **División**: Asegúrate de manejar divisiones por cero.
   - **Potencia**: Calcula un número elevado a una potencia.
   - **Raíz cuadrada**: Calcula la raíz cuadrada de un número. Considera cómo manejar números negativos.
3. Agrega un método que permita seleccionar la operación mediante una interfaz sencilla.
4. Utiliza `prompt` para recibir datos del usuario y `alert` para mostrar los resultados.

### Sugerencia:
- Utiliza un bucle `while` para que el usuario pueda realizar múltiples operaciones hasta que decida salir.
- Usa `switch` para manejar las diferentes opciones.
- Asegúrate de validar las entradas del usuario para evitar errores.

---

## **Problema B: Matriculación en Cursos**
**Objetivo**: Crear un programa que simule la matrícula de estudiantes en 12 cursos, asociando a cada curso un grupo de estudiantes y un profesor.

### Instrucciones:
1. Diseña una clase llamada `Materia` con los siguientes atributos:
   - **Nombre** del curso.
   - Lista de **alumnos**.
   - Nombre del **profesor**.
2. Implementa métodos para:
   - Obtener y actualizar los datos de los atributos.
   - Buscar si un estudiante está inscrito en el curso.
   - Mostrar la información del curso.
3. Crea una lista de 12 cursos con sus respectivos estudiantes y profesores.
4. Permite que el usuario busque los cursos en los que está inscrito un estudiante ingresando su nombre.

### Sugerencia:
- Utiliza un array para almacenar las instancias de la clase `Materia`.
- Usa un bucle para recorrer los cursos y verificar si el estudiante está inscrito.
- Presenta la información de los cursos de forma clara utilizando el método `getInfo()`.

---

## **Problema C: Inscripción de Estudiantes en Cursos**
**Objetivo**: Simular la inscripción de estudiantes en un curso, con la restricción de que el curso no puede exceder 20 alumnos.

### Instrucciones:
1. Reutiliza la clase `Materia` del problema anterior.
2. Implementa un método llamado `matricularAlumno` que:
   - Solicite el nombre del estudiante a inscribir.
   - Verifique si el curso ya alcanzó el límite de 20 estudiantes. Si es así, muestra un mensaje indicando que no se pueden inscribir más alumnos.
   - Verifique si el estudiante ya está inscrito. Si no lo está, agrégalo a la lista de alumnos.
   - Muestra la lista actualizada de alumnos después de cada inscripción.
3. Asegúrate de manejar entradas vacías y evitar duplicados en la lista de estudiantes.

### Sugerencia:
- Usa un bucle `while` para permitir múltiples intentos de inscripción.
- Valida las entradas del usuario y muestra mensajes claros para cada situación.
- Utiliza el método `getInfo()` para mostrar la información actualizada del curso.

---

## Notas Finales
Estos ejercicios están diseñados para fortalecer tus habilidades en la manipulación de strings, arrays, estructuras de control, y programación orientada a objetos. Intenta resolverlos utilizando las mejores prácticas y optimizando tu código tanto como sea posible.

