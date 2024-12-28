// PROBLEMA A
// PROGRAMA que muestra las caracteristicas de 3 celulares.
// cada, celular tiene : color, peso, resolucion de pantalla, camara
// y memoria RAM.
// Deben ademas, poder prender, reiniciar, tomar FOTOS y grabar VIDEOS.
class Celular{
  constructor(marca, modelo, precio, color, peso, resolucion, camara, ram, espacio){
    this.estado = false;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.color = color;
    this.resolucion = resolucion;
    this.camara = camara;
    this.ram = ram;
    this.peso = peso;
    this.espacio = espacio;
  }
  infoCell() {
    document.write(`
        <hr>
        MARCA : ${this.marca}<br>
        MODELO : ${this.modelo}<br>
        RESOLUCION : ${this.resolucion}px<br>
        CAMARA : ${this.camara}mpx<br>
        COLOR : ${this.color}<br>
        PRECIO : ${this.precio}$<br>
        RAM : ${this.ram}GB<br>
        ESPACIO : ${this.espacio}GB<br>
        PESO : ${this.peso}Gr<br>
        <hr>
      `)
  };
  prender() {
    if(this.estado != true){
      this.estado = true;
      document.write(`<br><b>Iniciando ${this.marca}-${this.modelo}</b>`)
    }
    else document.write(`<br><b>El celular ya esta prendido</b>`)
  };
  apagar() {
    if(this.estado != false){
      this.estado = false;
      document.write(`<br><b>Apagando ${this.marca}-${this.modelo}</b>`)
    }
    else document.write(`<br><b>El celular ya esta apagado</b>`)
  };
  reiniciar() {
    this.apagar();
    this.prender();
  };
  fotografiar() {
    document.write(`<br><b>Fotografia : img.png - ${this.camara}</b>`)
  };
  grabar() {
    document.write(`<br><b>Record : video.mp4 - ${this.resolucion}</b>`)
  };
};
// let c1 = new Celular("REDMI","PAD", 1234.1, "Plata", 12.4, 12, 45, 12, 256)
// c1.infoCell();
// c1.prender();
// c1.reiniciar();
// c1.fotografiar();
// c1.grabar();
// let c2 = new Celular("XIOMI","PRO", 432.4, "Cromado", 122.0, 12, 45, 12, 256)
// c2.infoCell();
// c2.prender();
// c2.reiniciar();
// c2.fotografiar();
// c2.grabar();
// PROBLEMA B
// PROGRAMA que cree celulares de alta gama, que asi, como los celulares
// clasicos, tengan ademas de mejores caracteristicas.
// Una camara lenta. camara extra y reconocimiento facial.
class CelularAltaGama extends Celular{
  constructor(marca, modelo, precio, color, peso, resolucion, camara, ram, espacio, camaraLenta, camaraExtra, reconocimientoFacial){
    super(marca, modelo, precio, color, peso, resolucion, camara, ram, espacio);
    this.camaraExtra = camaraExtra;
    this.camaraLenta = camaraLenta;
    this.reconocimientoFacial = reconocimientoFacial;
  }
  infoCell() {
    super.infoCell();
    document.write(`
        CAMARA EXTRA : ${this.camaraExtra ? "40mpx" : "NO"}
        <br>CAMARA LENTA : ${this.camaraLenta ? "SI" : "NO"}
        <br>RECONOCIMIENTO FACIAL : ${this.reconocimientoFacial ? "SI" : "NO"}
      `)
    };
}

// let clg1 = new CelularAltaGama("XIOMI","PRO", 432.4, "Cromado", 122.0, 12, 80, 12, 256,true, false, true);
// let clg2 = new CelularAltaGama("REDMI","PRO", 432.4, "RemarBLUE", 122.0, 12, 45, 20, 256,true, true, true);
// let clg3 = new CelularAltaGama("REDMI","PAD", 432.4, "Palo-ROSA", 122.0, 12, 5, 100, 256,false, false, true);
// let clg4 = new CelularAltaGama("XIOMI","X5Z", 432.4, "Cromado", 122.0, 12, 4, 29, 256,false, false, false); 
// let clg5 = new CelularAltaGama("HUAWEI","H4", 432.4, "Dorado", 122.0, 12, 450, 89, 256,true, true, false);
// let c1 = new Celular("REDMI","PAD", 1234.1, "Plata", 12.4, 12, 45, 12, 256)
// c1.infoCell();
// clg1.infoCell();
// clg2.infoCell();
// clg3.infoCell();
// clg4.infoCell();
// clg5.infoCell();
// PROBLEMA C
// Programa para seleccionar apps, descargarlas y administrarlar.
// Entonces cada app, tiene puntuacion, espacio; cada una debe, poder
// abrirse, cerrarse, instalar, desintalar.
class App{
  constructor(peso, puntuacion, name){
    this.peso = peso;
    this.puntuacion = puntuacion;
    this.name = name;
  }
  abrir() {
    document.write(`<br>${this.name} se esta abriendo`);
  }
  cerrar() {
    document.write(`<br>${this.name} se esta cerrando`);
  }
  instalar() {
    document.write(`<br>Instalando ${this.name}`);
  }
  desinstalar() {
    document.write(`<br>Desinstalando ${this.name}`);
  }
  infoApp(){
    document.write(`
        <hr>
        APLICACION
        <br> NAME : ${this.name}
        <br> PUNTUACION : ${this.puntuacion}
        <br> PESO : ${this.peso}
        <hr>
      `);
  }
};
app1 = new App(12.2, 4.5, "Fonite");
app2 = new App(2.2, 3.9, "The-Forest");
app3 = new App(10.2, 2.8, "FallGay");
app4 = new App(20.4, 3.6, "Lefts");
app5 = new App(120.4, 2.1, "Countir");
app6 = new App(14.05, 3.2, "Pepris");
app7 = new App(52, 4.0, "Jenga");
let appStore = [app1,app2,app3,app4,app5,app6,app7];
const Instalador = () => {
  let bestApp = appStore[6], secondApp = appStore[5];
  for(let apps of appStore){
    if(bestApp.peso > apps.peso)
      bestApp = apps;
    if((secondApp.peso > apps.peso) && apps !== bestApp)
      secondApp = apps;
  }
  bestApp.infoApp();
  secondApp.infoApp();
};
for(let y of appStore){
  y.infoApp();
}
document.write("<br> THE BESTS APPLICACION - LENGTH");
Instalador();
