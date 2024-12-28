# CELULAR AND APP MANAGEMENT SYSTEM
Este proyecto incluye un sistema para gestionar celulares y aplicaciones, abarcando tres problemas principales con diferentes niveles de funcionalidad.

## REQUERIMIENTOS
- Clases y objetos.
- Métodos en JavaScript.
- Herencia entre clases.

## EXTRA
> Métodos para manipulación de datos y lógica de control de flujo.

| **FUNCIÓN**        | **DESCRIPCIÓN**                              | **CELULARES** | **APPS** |
|--------------------|----------------------------------------------|---------------|-----------|
| `infoCell()`       | Muestra las características del dispositivo | ✔             | X         |
| `prender()`        | Enciende el celular                         | ✔             | X         |
| `apagar()`         | Apaga el celular                            | ✔             | X         |
| `reiniciar()`      | Reinicia el celular                         | ✔             | X         |
| `fotografiar()`    | Simula tomar una fotografía                 | ✔             | X         |
| `grabar()`         | Simula grabar un video                     | ✔             | X         |
| `infoApp()`        | Muestra detalles de la aplicación           | X             | ✔         |
| `abrir()`          | Abre la aplicación                         | X             | ✔         |
| `cerrar()`         | Cierra la aplicación                       | X             | ✔         |
| `instalar()`       | Instala la aplicación                      | X             | ✔         |
| `desinstalar()`    | Desinstala la aplicación                   | X             | ✔         |

> Uso de backticks para incrustar variables en cadenas de texto

```js
let nombre = "Juan";
document.write(`Hola, ${nombre}. Bienvenido a nuestro sistema.`);
```

## DESCRIPCIÓN
### Celulares Básicos
Los celulares básicos tienen las siguientes características:
- **Propiedades**: `marca`, `modelo`, `precio`, `color`, `peso`, `resolucion`, `camara`, `ram`, `espacio`.
- **Funciones**:
  - Encender, apagar y reiniciar el dispositivo.
  - Tomar fotografías y grabar videos.

### Celulares de Alta Gama
Estos celulares extienden las funcionalidades básicas añadiendo:
- Cámara lenta.
- Cámara secundaria.
- Reconocimiento facial.

### Aplicaciones
Las aplicaciones tienen:
- **Propiedades**: `peso`, `puntuacion`, `nombre`.
- **Funciones**:
  - Instalar y desinstalar.
  - Abrir y cerrar.

### Ejemplo de Uso
#### Celulares
```js
let celular1 = new Celular("Samsung", "Galaxy S10", 799, "Negro", 150, 1080, 12, 8, 128);
celular1.infoCell();
celular1.prender();
celular1.fotografiar();
```
#### Aplicaciones
```js
let app1 = new App(15, 4.2, "Spotify");
app1.instalar();
app1.abrir();
app1.infoApp();
```
#### Gestión de Aplicaciones
```js
const appStore = [
  new App(10, 4.5, "App1"),
  new App(20, 4.0, "App2"),
  new App(5, 3.8, "App3")
];

const Instalador = () => {
  let mejorApp = appStore[0];
  for (let app of appStore) {
    if (app.peso < mejorApp.peso) mejorApp = app;
  }
  mejorApp.infoApp();
};
Instalador();
```

## PRÁCTICA
Resuelve problemas relacionados con la gestión de celulares y aplicaciones en menos de 10 minutos.

