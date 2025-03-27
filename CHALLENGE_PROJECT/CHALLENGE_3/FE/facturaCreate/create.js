import {facturaOptionsGenerate} from "../dataLoadSend/factura/facturaDataReceive.js";
import {userOptionsGenerate} from "../dataLoadSend/user/userDataReceive.js";
import {itemOptionsGenerate} from "../dataLoadSend/item/itemDataReceive.js";
import {FacturaGeneralCreate} from "../dataLoadSend/factura/facturaDataSend.js";
import {FacturaUserCreate} from "../dataLoadSend/user/userDataSend.js";
import {FacturaItemCreate} from "../dataLoadSend/item/itemDataSend.js";
import {crearFacturaFactus} from "../apiFacturaCreate/facturaCreate.js";
import {buttonsNavegateForm} from "./buttons.js";

buttonsNavegateForm();
facturaOptionsGenerate();
userOptionsGenerate();
itemOptionsGenerate();

let formfunction = {
  "bill-create-a" : FacturaGeneralCreate,
  "bill-create-b" : FacturaUserCreate,
  "bill-create-c" : FacturaItemCreate
}
Object.entries(formfunction).forEach(([form, funct]) => {
  document.getElementById(form).addEventListener("submit", e => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    funct(data);
  });
})

document.getElementById("bill-create").addEventListener("click", async e => {
  console.log("CREANDO FACTURA");
  let notification = document.querySelector("dialog");
  notification.showModal();
  let svgNotification = notification.querySelector("svg");
  let letterNotification = notification.querySelector("p");
  // ERROR
  let answerAPI = await crearFacturaFactus();
  console.log(answerAPI);
  if(answerAPI.status == "Created"){
    localStorage.setItem("factura", answerAPI.data.bill.number);
    svgNotification.style.stroke = "#16FF00";
    svgNotification.querySelector("use").setAttribute("href", "../src/icons/iconos.svg#accept");
    letterNotification.textContent = "EXITOSO";
    window.location.href = 'http://localhost:8080/facturaShow/showFactura.html';
  }
  else{
    svgNotification.style.stroke = "#FF1700";
    svgNotification.querySelector("use").setAttribute("href", "../src/icons/iconos.svg#error");
    letterNotification.innerHTML = `FALLIDO<br><strong>${answerAPI.message}</strong><br>${JSON.stringify(answerAPI.data.errors,null,2)}`;
  }
});
