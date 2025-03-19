import {credential} from "../apiToken/token.js";

function crearFacturaFactus(factura){  
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

  fetch(credential.URL+"/v1/bills/validate", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}

export {crearFacturaFactus};
