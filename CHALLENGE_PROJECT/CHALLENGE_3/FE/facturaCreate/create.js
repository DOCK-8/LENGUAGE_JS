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

document.getElementById("bill-create").addEventListener("click", e => {
  console.log("CREANDO FACTURA");
  crearFacturaFactus();
});
