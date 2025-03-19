import {optionApi} from "../dataFetch.js";

function itemOptionsGenerate(){
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
}

export {itemOptionsGenerate};
