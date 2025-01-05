//PROBLEM A
//Programa que simule la calificacion de una materia
//APROBARA
//Si tiene al menos 90% de asistencia = 10 asistencias total
//Si tiene al menos 7/10 de promedio
//Si tiene al menos el 75% de los trabajas entregados = 5 trabajos
//Usa la consola y dale estilo para reconocer cuando
//aprobara o no segun las 3 condiciones
class Libreta{
  constructor(estudiante,materia,asistencia,promedio,trabajos) {
    this.estudiante = estudiante;
    this.materia = materia;
    this.asistencia = asistencia;
    this.promedio = promedio;
    this.trabajos = trabajos;
  }
  getInfo() {
    let situacion,color;
    if(this.asistencia / 10 >=0.9 && this.promedio/10 >= 0.7 && this.trabajos/5 >= 0.75){
      situacion = "APROBADO";
      color = "#0f0";
    }
    else{
      situacion = "DESAPROBADO";
      color = "#f00";
    }
    console.log(`${this.estudiante} -> ${this.materia} : %c${situacion}`, `color : ${color}; font-weight : 800;`);
    console.table(this);
  }
};

const caso1 = new Libreta("Juan Pérez", "Matemáticas", 10, 8, 5);
caso1.getInfo();

const caso2 = new Libreta("Ana Gómez", "Historia", 8, 8, 5);
caso2.getInfo();

const caso3 = new Libreta("Luis Ramírez", "Química", 10, 6, 5);
caso3.getInfo();

const caso4 = new Libreta("María López", "Física", 10, 8, 3);
caso4.getInfo();

const caso5 = new Libreta("Pedro Sánchez", "Inglés", 9, 7, 4);
caso5.getInfo();

const caso6 = new Libreta("Laura Fernández", "Biología", 8.9, 8, 5);
caso6.getInfo();

const caso7 = new Libreta("Tomás Martínez", "Arte", 10, 6.9, 5);
caso7.getInfo();

const caso8 = new Libreta("Sofía Díaz", "Música", 10, 8, 3.7);
caso8.getInfo();

//PROBLEM B
//PROGRAMA que distribuya el tiempo, de manera eficiente, dondes,
//se tiene un total de 8h por dia durante 2 semanas:
//24 horas de estudio
//24 horas de trabajos practicos
//56 horas de trabajo
//8 horas para labores del hogares
class Work{
  constructor(name, importancia, horas){
    this.name = name;
    this.importancia = importancia;
    this.horas = horas;
  }
};
function semanal(study, home,work, workpractice) {
  let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  days.forEach( day => {
    console.group(day);
    diario(study, home, work, workpractice)
    console.groupEnd();

  });
}
function diario(study, home, work, workpractice) {
  console.group();
  console.table(study);
  console.table(home);
  console.table(work);
  console.table(workpractice);
  console.groupEnd();
}
let studyHour = 24/14*60;
let homeHour = 8/14*60;
let workPracticeHour = 24/14*60; 
let workHour = 56/14*60;
let study = new Work("Estudio", 0, studyHour);
let home = new Work("Hogar", 0, homeHour);
let workPractice = new Work("Trabajo-Practico", 0, workPracticeHour);
let work = new Work("Trabajo", 0, workHour);
for(let x = 1; x <= 2; x++){
  console.log(`%cSEMANA ${x}`,"color : #00f; font-weight: 800; text-transform: uppercase;");
  semanal(study, home, work, workPractice);
}
