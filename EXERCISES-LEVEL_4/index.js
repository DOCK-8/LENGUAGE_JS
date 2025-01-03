//PROBLEM A
//Generar una calculadora que tenga las funciones de suma, resta,
//multiplicacion, divicion, potencia, raiz
class Calculadora {
  constructor(){}
  ejecutar() {
   let opcion;
   while(1){
    const option = prompt(
      "Calculadora - Selecciona una opción:\n" +
      "1. Suma\n" +
      "2. Resta\n" +
      "3. Multiplicación\n" +
      "4. División\n" +
      "5. Potencia\n" +
      "6. Raíz cuadrada\n" +
      "7. Salir"
    );

    if (option === "7") {
      alert("¡Hasta luego!");
      break;
    }

    let num1, num2, result;

    switch (option) {
      case "1":
        num1 = parseFloat(prompt("Ingresa el primer número:"));
        num2 = parseFloat(prompt("Ingresa el segundo número:"));
        result = this.suma(num1,num2);
        alert(`El resultado de la suma es: ${result}`);
        break;
      case "2":
        num1 = parseFloat(prompt("Ingresa el primer número:"));
        num2 = parseFloat(prompt("Ingresa el segundo número:"));
        result = this.resta(num1,num2);
        alert(`El resultado de la resta es: ${result}`);
        break;
      case "3":
        num1 = parseFloat(prompt("Ingresa el primer número:"));
        num2 = parseFloat(prompt("Ingresa el segundo número:"));
        result = this.multi(num1,num2);
        alert(`El resultado de la multiplicación es: ${result}`);
        break;
      case "4":
        num1 = parseFloat(prompt("Ingresa el primer número:"));
        num2 = parseFloat(prompt("Ingresa el segundo número:"));
        if (num2 !== 0) {
          result = this.divi(num1,num2);
          alert(`El resultado de la división es: ${result}`);
        } else {
          alert("Error: División por cero.");
        }
        break;
      case "5":
        num1 = parseFloat(prompt("Ingresa el primer número [BASE]:"));
        num2 = parseFloat(prompt("Ingresa el segundo número [EXPONENTE]:"));
        result = this.pote(num1, num2);
        alert(`El resultado de la potencia es: ${result}`);
        break;
      case "6":
        num1 = parseFloat(prompt("Ingresa el primer número [BASE]:"));
        num2 = parseFloat(prompt("Ingresa el segundo número [GRADO]:"));
        if (num1 >= 0) {
          result = this.raiz(num1,num2);
          alert(`El resultado de la raíz cuadrada es: ${result}`);
        } else {
          alert("Error: No se puede calcular la raíz cuadrada de un número negativo.");
        }
        break;
      default:
        alert("Opción no válida. Intenta de nuevo.");
      }
    }
  }
  suma(num1,num2) {
    return num1 + num2;
  }
  resta(num1,num2) {
    return num1 - num2;
  }
  mult(num1,num2) {
    return num1 * num2;
  }
  divi(num1,num2) {
    return num1 / num2;
  }
  pote(num1,exp) {
    return num1 ** exp;
  }
  raiz(num1,grado) {
    return this.pote(num1,1/grado)
  }
};
let calculator = new Calculadora();
calculator.ejecutar();
document.write(`<h2>CALCULADORA</h2>`);

//PROBLEM B
//PROGRAMA que simule la matricula en 12 cursos de una facultad, cada curso debe de tener
//estudiante y profesores
class Materia{
  constructor(name, alumnos, profesor){
    this.name = name;
    this.alumnos = alumnos;
    this.profesor = profesor;
  }
  getName() {return this.name;}
  setName(name) {this.name = name;}
  getAlumnos() {return this.alumnos;}
  setAlumnos(alumnos) {this.alumnos = alumnos;}
  getProfesor() {return this.profesor;}
  setProfesor(profesor) {this.profesor = profesor;}
  searchAlumno(alumno) {return this.alumnos.includes(alumno);}
  getInfo() {
    document.write(`
        <hr>
        <p>${this.name}</p>
        <p>${this.alumnos.join("<br>")}</p>
        <p>${this.profesor}</p>
        <hr>
      `);
  }
  getInfoM(){
    document.write(`
        <hr>
        <p>${this.name}</p>
        <p>${this.profesor}</p>
        <hr>
      `);
  }
};
let alumnos = [
  "Lucas", "Juan", "Luis", "María", "Diego", 
  "Ana", "Pedro", "Sofía", "Mario", "Elena",
  "Carlos", "Lucía", "Diana", "José", "Sara"
];
let materias = [
  new Materia("Matemática", ["Lucas", "Juan", "Luis", "María", "Diego"], "Juan Diego"),
  new Materia("Física", ["Lucas", "Ana", "Pedro", "Sofía", "Mario"], "María Gómez"),
  new Materia("Química", ["Luis", "Juan", "Carlos", "Lucía", "Diana"], "Raúl Hernández"),
  new Materia("Biología", ["Ana", "María", "Pedro", "Elena", "Sara"], "Clara Ruiz"),
  new Materia("Historia", ["Juan", "María", "Lucas", "Luis", "Elena"], "Laura Torres"),
  new Materia("Geografía", ["Carlos", "Ana", "Diana", "José", "Sara"], "Luis Pérez"),
  new Materia("Literatura", ["Lucas", "Juan", "María", "Sofía", "Elena"], "Carmen López"),
  new Materia("Filosofía", ["Juan", "Ana", "Luis", "Carlos", "Diana"], "Jorge Martínez"),
  new Materia("Arte", ["Lucas", "Elena", "Lucía", "Carlos", "Luis"], "Rosa Sánchez"),
  new Materia("Música", ["Pedro", "Ana", "Diana", "Sofía", "Elena"], "Alberto Gutiérrez"),
  new Materia("Educación Física", ["Lucas", "Diego", "Juan", "María", "Luis"], "Pablo Fernández"),
  new Materia("Informática", ["Carlos", "Pedro", "Lucas", "María", "Diana"], "Elena Navarro")
];
let name = prompt(`${alumnos.join("\n")}\nNOMBRE DEL ALUMNO BUSCAR`);
materias.forEach(materia => materia.searchAlumno(name) ? materia.getInfoM() : null);

//PROBLEM C
//PROGRAMA que simule la inscripcion de alumnos en materias, si la cantidad de alumnos
//es menor a 20 aun se puede inscribir pero si no entonces, negarle la inscripcion

class Materia{
  constructor(name, alumnos, profesor){
    this.name = name;
    this.alumnos = alumnos;
    this.profesor = profesor;
  }
  getName() {return this.name;}
  setName(name) {this.name = name;}
  getAlumnos() {return this.alumnos;}
  setAlumnos(alumnos) {this.alumnos = alumnos;}
  getProfesor() {return this.profesor;}
  setProfesor(profesor) {this.profesor = profesor;}
  searchAlumno(alumno) {return this.alumnos.includes(alumno);}
  matricularAlumno() {
    while(1) {
      let alumno = prompt(`Nombre del alumno\nMATRICULADOS : ${this.alumnos.join("\n")}`);
      if(alumno.length == 0){
        alert("No se aceptan nombres vacios");
        continue;
      }
      if(this.alumnos.length >= 20){
        alert(`La cantidad de alumnos esta la maximo, al otro año sera`);
        break;
      }
      if(!this.alumnos.includes(alumno)){
        this.alumnos.push(alumno);
        alert(`${alumno} : Matriculado Correctamente`)
      }
      else
        alert("El alumno ya se encuentra matriculado");
    }
    this.getInfo();
  }
  getInfo() {
    document.write(`
        <hr>
        <p>${this.name}</p>
        <p>${this.alumnos.join("<br>")}</p>
        <p>${this.profesor}</p>
        <hr>
      `);
  }
  getInfoM(){
    document.write(`
        <hr>
        <p>${this.name}</p>
        <p>${this.profesor}</p>
        <hr>
      `);
  }
};
let materia = new Materia("Matemática", ["Lucas", "Juan", "Luis", "María", "Diego"], "Juan Diego");
materia.matricularAlumno();
