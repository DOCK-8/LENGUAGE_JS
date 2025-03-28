import {cargarConfigAPI, credential} from "../apiToken/token.js";
import factura from "../dataLoadSend/factura.json" with {type : "json"};

function crearFacturaFactus(){  
  cargarConfigAPI();
  let raw = JSON.stringify(factura);
  let requestOptions = {
    method: "POST",
    headers: {
      'Authorization' : `${credential.TOKEN_TYPE} ${credential.TOKEN}`,
      'Content-Type' : 'application/json',
    },
    body: raw,
    redirect: "follow"
  };

  return fetch(credential.URL+"/v1/bills/validate", requestOptions)
  .then((response) => response.json())
  .then((result) => result)
  .catch((error) => console.error(error));
}

export {crearFacturaFactus};
