import {cargarConfigAPI, credential} from "../apiToken/token.js";

function ShowFactura(data){
  cargarConfigAPI();
  let optionShow = {
    method: 'GET',
    headers: {
      'Authorization' : `${credential.TOKEN_TYPE} ${credential.TOKEN}`,
      'Accept' : 'application/json',
    },
    redirect : "follow"
  };
  return fetch(credential.URL+`/v1/bills/show/${data}`,optionShow)
  .then(respuesta => respuesta.json())
  .then(answer => answer)
  .catch(error => console.error(error));
}

export {ShowFactura};
