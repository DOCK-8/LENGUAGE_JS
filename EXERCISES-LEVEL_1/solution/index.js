let  = viajeros = 0;
let  edadUser = prompt(`Ingrese la EDAD viajero del viajero ${viajeros+1}`);
let pais;
if(edadUser >= 18)
  pais = "PALETA";
else
  pais = "KANTO";
document.write(`<br>Hola viajero, su ciudad es ${pais}, por que su edad es ${edadUser}`)
viajeros++;
edadUser = prompt(`Ingrese la EDAD viajero del viajero ${viajeros+1}`);
if(edadUser >= 18)
  pais = "PALETA";
else
  pais = "KANTO";
document.write(`<br>Hola viajero, su ciudad es ${pais}, por que su edad es ${edadUser}`)
