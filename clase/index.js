// Definicion de clases, que modelan un objeto en la vida Real
class Animal{
  // Definicion de Atributos
  constructor(especie, genero, edad, color) {
    this.especie = especie;
    this.genero = genero;
    this.edad = edad;
    this.color = color;
  }
  // Definicion de funciones o elementos dinamicos
  infoAnimal () {
    document.write(`Soy ${this.especie}, de genero ${this.genero}, con una edad ${this.edad} y de color ${this.color}`);
  }
};
// Clase que hereda de una clases que padre -> hijo : atributos y
// funciones del padre dentro del hijo
class Perro extends Animal{
  constructor(genero, edad, color, raza){
    // LLamada al constructor de la clase padre
    super("Perro", genero, edad, color);
    // Definicion propia del atributo de la clase
    this.raza = raza;
  }
};

const perro = new Animal("perro", "Masculino", 12, "negro");
perro.infoAnimal();

document.write("<br>")

const balto = new Perro("Masculino", 1, "negro-blanco", "Perro-Lobo");
balto.infoAnimal();
