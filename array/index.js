//Un array es un conjunto de elementos o datos
let x = ['1', 2, 4];
document.write(x);
//Acceder a este conjuntos es enumerarlo por sus posiciones
//1: POCION 0
document.write(`<br>Elemento 1 : ${x[0]}`);
//2: POCION 1
document.write(`<br>Elemento 2 : ${x[1]}`);
//3: POCION 2
document.write(`<br>Elemento 3 : ${x[2]}`);
//Un array asociativo es una estructura similar a un map
let y = {
  name : "Lucas",
  canal : {
    number : true,
  },
};
document.write(`<hr>Nombre : ${y["name"]}<br>Canal de YT : ${y["canal"]["number"]}`);
