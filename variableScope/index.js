//let : toda variable que es permitada en un bloque o seccion
let x = 4;
document.write(x);
// BLOQUE DE Y
{
//var : es permitido para todo, lo pueden ver todos
  var y = 51;
}
// BLOQUE DE Z
{
// Crea la variable dentro del bloque
  let z = 5;
}
document.write(y);
// Genera error debido a que solo es permitida en su bloque de creacion
document.write(z);
