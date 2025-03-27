import {ShowDataFactura} from "./showFacturaData.js";

ShowDataFactura();

document.querySelector("form").addEventListener("submit", e =>{
  let data = Object.fromEntries(new FormData(e.target));
  localStorage.setItem("factura","SETP"+data.number);
  ShowDataFactura();
})
