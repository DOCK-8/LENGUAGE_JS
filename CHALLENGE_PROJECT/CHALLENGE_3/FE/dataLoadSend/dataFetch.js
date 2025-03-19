import factura from "./factura.json" with {type : "json"};
import {FacturaGeneralCreate} from "./factura/facturaDataSend.js";
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
export {optionApi};
