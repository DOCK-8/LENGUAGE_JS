const createKey = (modelo,precio,descripcion,i) => {

  let img = document.createElement("IMG");
  img.src = "static/img/key.png";

  let elementModelo = document.createElement("P");
  elementModelo.textContent = modelo;
  elementModelo.classList.add("modelo");

  let elementPrecio = document.createElement("P");
  elementPrecio.textContent = `PRECIO : $${precio}`;
  elementPrecio.classList.add("precio");

  let elementDescripcion = document.createElement("P");
  elementDescripcion.textContent = descripcion;
  elementDescripcion.classList.add("descripcion"); 

  let $ = document.createElement("DIV");
  $.classList.add("key-conteiner");
  $.tabIndex = i;
  $.addEventListener("click", () => {
    document.getElementById("key-hidden").value = modelo;
  });
  
  $.appendChild(img);
  $.appendChild(elementModelo);
  $.appendChild(elementDescripcion);
  $.appendChild(elementPrecio);

  return $;
}

let fragment = document.createDocumentFragment();

for(let x = 1; x <= 20; x++){
  let model = `A${Math.round(Math.random()*100)}KM`;
  let precio = Math.round(Math.random()*600+10);
  let description = `Key to open XVB89 door model`;
  fragment.appendChild(createKey(`MODELO ${model}`,precio,description,x));
}

let formulario = document.getElementById("keys-conteiner");
formulario.appendChild(fragment);
