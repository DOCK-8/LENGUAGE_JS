# **EXERCISES - LEVEL 6**

Este ejercicio tiene como objetivo reforzar tus habilidades con el DOM en JavaScript, la manipulación de eventos y la creación dinámica de elementos en una página web. Se enfoca en la generación de interfaces interactivas utilizando métodos y propiedades modernas del navegador.

---

## **Enunciado**

### **Contexto:**

Debes crear una interfaz web dinámica que genere 20 tarjetas de productos, representando llaves únicas para abrir puertas específicas. Cada tarjeta contiene la siguiente información:

1. Modelo de la llave (generado aleatoriamente).
2. Precio de la llave (generado aleatoriamente).
3. Descripción breve de la llave.
4. Imagen representativa de la llave.

### **Funcionalidad Principal:**

1. Cada tarjeta debe ser un elemento interactivo. Al hacer clic en una tarjeta, el modelo de la llave seleccionada debe almacenarse en un campo oculto (`<input type="hidden">`).
2. El formulario debe incluir un botón para enviar la llave seleccionada.

---

## **Requisitos Técnicos**

### **HTML**

- Un formulario (`<form>`) para contener las tarjetas y gestionar la interacción.
- Un botón de envío vinculado al formulario.
- Uso de un campo oculto (`<input type="hidden">`) para almacenar el modelo de la llave seleccionada.

### **CSS**

- Aplicar estilos a las tarjetas para que se vean como un catálogo de productos.
- Añadir clases CSS para mejorar la organización del diseño.

### **JavaScript**

1. **Creación Dinámica de Elementos:**
   - Generar 20 tarjetas utilizando `document.createElement`.
   - Cada tarjeta debe incluir:
     - Una imagen (`<img>`).
     - Un párrafo con el modelo.
     - Un párrafo con el precio.
     - Un párrafo con la descripción.
   - Añadir clases y estilos dinámicamente.

2. **Eventos:**
   - Asignar un evento `click` a cada tarjeta para actualizar el campo oculto con el modelo de la llave seleccionada.
   - Usar `tabIndex` para hacer las tarjetas accesibles mediante teclado.

3. **Manipulación del DOM:**
   - Utilizar `document.createDocumentFragment` para mejorar el rendimiento al agregar múltiples elementos.
   - Agregar dinámicamente las tarjetas al formulario.

4. **Variables Aleatorias:**
   - Generar modelos y precios utilizando funciones matemáticas (`Math.random`, `Math.round`).

---

## **Tiempo Estimado**

- **Implementación Básica:** 30 minutos.
- **Estilización con CSS:** 20 minutos.
- **Pruebas y Mejoras:** 15 minutos.

---

## **Formato de Salida**

1. El catálogo de llaves debe mostrarse en un diseño organizado y estilizado.
2. Al seleccionar una tarjeta, el modelo de la llave debe aparecer en el campo oculto (`<input type="hidden">`), preparado para su envío.

---

## **Herramientas y Métodos de JavaScript Requeridos**

1. **Manipulación del DOM:**
   - `document.createElement`
   - `document.getElementById`
   - `document.createDocumentFragment`
   - Métodos para agregar elementos al DOM: `appendChild`.

2. **Eventos:**
   - `addEventListener`
   - Manejo del evento `click`.

3. **Manipulación de Clases:**
   - `classList.add`

4. **Generación de Datos Aleatorios:**
   - `Math.random`
   - `Math.round`

---

¡Completa este ejercicio y aplica tus conocimientos de programación para crear una interfaz interactiva y funcional!

