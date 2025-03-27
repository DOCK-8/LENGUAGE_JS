import {credential, refreshToken, cargarConfigAPI} from "../apiToken/token.js"

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-include]");
  elements.forEach(element => {
    const file = element.getAttribute("data-include");
    fetch(file)
    .then(data => data.text())
    .then(response => {
      element.innerHTML = response;
    })
    .catch(error => console.error(error));
  });
});

await cargarConfigAPI();

async function verFacturasFactus(){
  let options = {
    method : 'GET',
    headers : {
      'Authorization' : `Bearer ${credential.TOKEN}`,
      'Accept' : 'application/json',
    }
  };
  let facturas = await fetch(credential.URL+"/v1/bills",options)
  .catch( error => console.error(`MANO MIRAME$ ${error.message}`));
  try{
    if(!facturas.ok)
      throw new Error("We are authorize personal");
    let data = await facturas.json();
    console.log(data.data.data);
    return data.data.data;
  }catch(e){
    console.log(`CAIMOS ${e}`);
    await refreshToken();
    await verFacturasFactus();
  }
}

async function cargarFacturasFactus(){
  let facturas = await verFacturasFactus();
  let table = document.getElementById("table-facturas").querySelector("tbody");
  let fragment = document.createDocumentFragment();

  facturas.forEach(factura => {
    let fila = document.createElement("tr");
    let celda1 = document.createElement("td");
    let celda2 = document.createElement("td");
    let celda3 = document.createElement("td");
    let celda4 = document.createElement("td");
    let celda5 = document.createElement("td");
    celda1.textContent = factura.id;
    celda2.textContent = factura.document.name;
    celda3.textContent = factura.number;
    celda4.textContent = factura.api_client_name;
    let button = document.createElement("BUTTON");
    if(factura.status != 1){
      let opcion = "invalid";
      button.classList.add(opcion);
      button.textContent = opcion;
    }
    else{
      let opcion = "valid";
      button.classList.add(opcion);
      button.textContent = opcion;
    }
    celda5.appendChild(button);

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    fila.appendChild(celda5);

    fragment.appendChild(fila);
  });
  table.appendChild(fragment);
}

cargarFacturasFactus();

