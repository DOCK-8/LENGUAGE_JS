//VIEW FACTURAS

/*
*START SECTION TO WILL BE CHANGED
*/
import {verFacturasFactus, crearFacturaFactus} from "./factusAPI.js"

// let url = "http://localhost:3000/facturas"
// let facturas = await fetch(url)
// .then(data => data.json())
// .catch(error => console.error(`No se puedo crack ERROR => ${error}`));
let facturas = await verFacturasFactus();
/*
*END SECTION TO WILL BE CHANGED
*/

// V1-NOT DOCUMENTFRAGMENT
// let table = document.getElementById("table-facturas");
// V2-WITH DOCUMENTFRAGMENT
let table = document.getElementById("table-facturas").querySelector("tbody");
let fragment = document.createDocumentFragment();

facturas.forEach(factura => {
  /*VERSION WHERE WE DON'T USE DOCUMENTFRAGMENT*/
  // let newRow = table.insertRow();  
  // newRow.insertCell(0).textContent = factura.id;
  // newRow.insertCell(1).textContent = factura.document.name;
  // newRow.insertCell(2).textContent = factura.number;
  // newRow.insertCell(3).textContent = factura.api_client_name;
  // newRow.insertCell(4).textContent = factura.status;
  /*VERSION WHERE WE USE DOCUMENTFRAGMENT*/
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
  if(factura.status == 1){
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
// V2-WITH DOCUMENTFRAGMENT
table.appendChild(fragment);

//A FUNCTION that genereates a reference code
function generateReferenceCode (){
  return `${Math.round(Math.random()*600)}A${Math.round(Math.random()*600)}`;
}

async function optionApi(nodeSelect, data){
  let dataAPI = await fetch(`http://localhost:3000/${data}`)
  .then(dat => dat.json())
  .catch(error => console.error(error));

  dataAPI.forEach(dataApi => {
  let newOption = document.createElement("OPTION");
  newOption.value = dataApi.id;
  newOption.textContent = `${dataApi.id} - ${dataApi.name}`;
  nodeSelect.appendChild(newOption);
  });
}

//NUMBER_RANGE_ID
let numberRangeSelect = document.querySelector("#numberRange");
optionApi(numberRangeSelect, "rangosNumeracion");

//REFERENCE_CODE
document.querySelector("#referenceCode").value = generateReferenceCode();

//PAYMENT_FORM
let paymentFormSelect = document.querySelector("#paymentForm");
optionApi(paymentFormSelect, "formasPago");
paymentFormSelect.addEventListener("change", (e) => {
  if(e.target.value == 2){
    document.querySelector("#paymentDate").style.display = "flex";
    document.querySelector("#paymentDate").previousElementSibling.style.display = "flex";
  }  
  else{
    document.querySelector("#paymentDate").style.display = "none";
    document.querySelector("#paymentDate").previousElementSibling.style.display = "none";
  }
});

// PAYMENT_METHOD_SELECT
let paymentMethodSelect = document.querySelector("#paymentMethodCod");
optionApi(paymentMethodSelect, "codigosFormaPago");

/*CUSTOMER*/
// CUSTOMER_IDENTIFICATION
let customerIdentificationSelect = document.querySelector("#customerIdentificationId");
optionApi(customerIdentificationSelect, "documentoIdentidad");

// CUSTOMER_ORGANIZATION
let customerOrganizationSelect = document.querySelector("#customerLegalOrganization");
optionApi(customerOrganizationSelect, "tiposOrganizaciones");

// CUSTOMER_TRIBUTE_SELECT
let customerTributeSelect = document.querySelector("#customerTribute");
optionApi(customerTributeSelect, "tributosClientes");

// CUSTOMER_MUNICIPALITY
let customerMunicipalitySelect = document.querySelector("#customerMunicipality");
optionApi(customerMunicipalitySelect, "municipios");

/*ITEM*/
// ITEM_UNIT_MEASURE
let itemUnitMeasureSelect = document.querySelector("#itemUnitMeasure");
optionApi(itemUnitMeasureSelect, "unidadesMedida");

// ITEM_STANDARD_CODE
let itemStandardCodeSelect = document.querySelector("#itemStandardCode");
optionApi(itemStandardCodeSelect, "identificacionProducto");

// ITEM_TRIBUTE
let itemTributeSelect = document.querySelector("#itemTribute");
optionApi(itemTributeSelect, "tributosProducto");

let range = document.querySelector("#itemDiscountRate");
let dataRange = document.querySelector("#itemDiscountData");
dataRange.textContent = range.value;
range.addEventListener("input", (e) => {
  dataRange.textContent = range.value;
})

let rangeA = document.querySelector("#itemTaxRate");
let dataRangeA = document.querySelector("#itemTaxData");
dataRangeA.textContent = rangeA.value;
rangeA.addEventListener("input", (e) => {
  dataRangeA.textContent = rangeA.value;
})


/*FORM*/


//CREATE FACTURAS
import {Factura} from "./facturaCreate.js";

const Json = new Factura();

let form  = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries( new FormData(e.target) );
  Json.documentInfo(data.numbering_range_id, data.code, data.observation);
  Json.documentCustomer(data.customer_identification, "", data.customer_name, data.customer_address, data.customer_email, data.customer_phone, data.customer_identification_document);
  Json.documentCompany(data.customer_company, data.customer_legal_organization, data.customer_tribute, data.customer_trade_name);
  Json.documentMunicipality(data.customer_municipality);
  Json.documentPay(data.payment_form, data.payment_method_code, data.payment_due_date);
  Json.documentBilling(data.billing_end_date, data.billing_end_time, data.billing_start_date, data.billing_start_time);
  crearFacturaFactus(Json.documentCreate());
});

function editItem(item){
    let $ = element => document.querySelector(element);
    $("#itemCodeReference").value = item.code_reference;
    $("#itemName").value = item.name;
    $("#itemQuantity").value = item.quantity;
    $("#itemDiscountRate").value = item.discount_rate;
    $("#itemDiscountData").textContent = item.discount_rate;
    $("#itemPrice").value = item.price;
    $("#itemTaxRate").value = item.tax_rate;
    $("#itemTaxData").textContent = item.tax_rate;
    $("#itemUnitMeasure").value = item.unit_measure_id;
    $("#itemStandardCode").value = item.standard_code_id;
    $("#itemIsExcluded").value = item.is_excluded;
    $("#itemTribute").value = item.tribute_id;
}

function createItem(item){
  let $ = item => document.getElementById(item);
  let table = $("itemsTable");
  let rowTable = table.insertRow();
  rowTable.insertCell(0).textContent = item.code_reference;
  rowTable.insertCell(1).textContent = item.name;
  rowTable.insertCell(2).textContent = item.price;
  rowTable.insertCell(3).textContent = item.quantity;
  rowTable.insertCell(4).textContent = Number(item.price)*parseFloat(item.discount_rate)/100;
  rowTable.insertCell(5).textContent = item.unit_measure_id;
  let options = rowTable.insertCell(6);
  let editB = document.createElement("BUTTON");
  editB.textContent = "EDIT";
  editB.type = "button";
  editB.classList.add("editButton");
  editB.addEventListener("click", (e) => {
    editItem(item);
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "flex";
  });
  let deleteB = document.createElement("BUTTON");
  deleteB.textContent = "DELETE";
  deleteB.type = "button";
  deleteB.classList.add("deleteButton");
  deleteB.addEventListener("click", () => {
    Json.factura.items.splice(rowTable.rowIndex-1,1);
    table.deleteRow(rowTable.rowIndex);
  });
  let acceptB = document.createElement("BUTTON");
  acceptB.textContent = "CONFIRM";
  acceptB.type = "button";
  acceptB.classList.add("acceptButton");
  acceptB.addEventListener("click", (e) => {
    deleteB.click();
    $("itemCreate").click();
    e.target.style.display = "none";
    e.target.previousElementSibling.style.display = "flex";
    console.log(Json.factura.items);
  });
  options.appendChild(editB);
  options.appendChild(acceptB);
  options.appendChild(deleteB);
}

Json.factura.items.forEach(item => {
  createItem(item);
});

let itemCreate = document.querySelector("#itemCreate");
itemCreate.addEventListener("click", () => {
  let item = {};
  const $ = elementoNode => document.querySelector(elementoNode);
  item.code_reference = $("#itemCodeReference").value;
  item.name = $("#itemName").value;
  item.quantity = $("#itemQuantity").value;
  item.discount_rate = $("#itemDiscountRate").value;
  item.price = $("#itemPrice").value;
  item.tax_rate = $("#itemTaxRate").value;
  item.unit_measure_id = $("#itemUnitMeasure").value;
  item.standard_code_id = $("#itemStandardCode").value;
  item.is_excluded = $("#itemIsExcluded").checked ? 1 : 0;
  item.tribute_id = $("#itemTribute").value;
  Json.documentItems(item.code_reference,item.name,item.quantity,item.discount_rate, item.price, item.tax_rate, item.unit_measure_id, item.standard_code_id, item.is_excluded, item.tribute_id);
  createItem(item);
});

document.getElementById("crearFacturaView").addEventListener("click", (e) => {
  document.getElementById("view-facturas").style.display = "none";
  document.getElementById("create-facturas").style.display = "block";
});
document.getElementById("VerFacturaView").addEventListener("click", (e) => {
  document.getElementById("create-facturas").style.display = "none";
  document.getElementById("view-facturas").style.display = "block";
});
