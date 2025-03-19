import {optionApi} from "../dataFetch.js";

function userOptionsGenerate(){/*CUSTOMER*/
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
}

export {userOptionsGenerate};
