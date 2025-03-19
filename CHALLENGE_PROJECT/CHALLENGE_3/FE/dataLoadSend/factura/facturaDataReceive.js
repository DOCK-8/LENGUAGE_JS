import {optionApi} from "../dataFetch.js";

function generateReferenceCode(){
  return `${Math.round(Math.random()*600)}A${Math.round(Math.random()*600)}`;
}
function facturaOptionsGenerate(){
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
}

export {facturaOptionsGenerate};
