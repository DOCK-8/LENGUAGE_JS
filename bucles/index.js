let number = 0
document.write("<hr><p>WHILE</p>");
//While
while(number <= 5){
  document.write(`number : ${number}<br>`);
  number++;
}
document.write("<hr><p>DO WHILE</p>");
//do while
number = 12;
do{
  document.write(`number : ${number}<br>`);
  number++;
}while(number <= 15);
document.write("<hr><p>FOR</p>");
//for
for(let number = 5; number <= 9; number++)
  document.write(`number : ${number}<br>`);
document.write("<hr>");
//REMEMBER = variable scopes
document.write("el numero actual es : "+number);
document.write("<hr>")
let array = [1, 2, 22, "goku"];
//for in
for (let x in array){
  document.write(x + "<br>");
}
document.write("<hr>");
//for of
for (let x of array){
  document.write(x + "<br>");
}
document.write("<hr><p>CONTINUE-BREAK</p>");
let x = [1, [10, 20, 30], 3, 4, 5, 6];
for(let num in x){
  if( num == 1){
    for(let y of x[num]){
      document.write(`${y}<br>`);
      if(y % 4 == 0)
        break;
    }
    continue;
  }
  document.write(`${x[num]}<br>`);
}
