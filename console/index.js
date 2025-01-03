//FUNCION : Detectar el error en una expŕesion
console.assert(4>5);
//FUNCION : Limpiar la consola
console.clear();
//FUNCION : Generar error en la consola
console.error("Respete");
//FUNCION : Generar info en la consola
console.info("Recuerde el ;");
//FUNCION : Generar mensaje en la consola
console.log("Que paso crack");
//FUNCION : Generar formato de tabla en la consola
let tabla = {
  nombre: "franl",
  edad : 12,
};
console.table(tabla);
//FUNCION : Generar mensaje de alerta en la consola
console.warn("No pusiste ;");
//FUNCION : Generar info del objeto en la consola
console.dir(tabla);
//FUNCION : Generar un contandor
console.count();
console.count();
console.count();
console.count();
//FUNCION : Reiniciar el contador
console.countReset();
console.count();
//FUNCION : Crear un grupo de sentencias en consola
console.group()
console.log("XD");
console.table([1,2,3,4,5]);
//FUNCION : Cerrar el grupo de sentencias
console.groupEnd();
//FUNCION : Crear grupo cerrado
console.groupCollapsed("Nuevo grupo");
console.warn("CUIDADO, POR AHI ESPANTAN");
console.groupEnd();
//FUNCION : Crear un timer
console.time();
console.log("IMPRIMIR ALGO");
//FUNCION : Mostrar el timer en ese instante
console.timeLog();
console.warn("¿Demoramos mucho?");
//FUNCION : Terminar con la vida del timer
console.timeEnd();
//METODO : Cambiar aspecto del texto de la consola
console.log("%cHola crack", "color : #fab;background : black; padding: 20px;font-weight: 800; text-transform : uppercase; font-size : 2em")
