import {cargarConfigAPI, credential} from "../apiToken/token.js";

function DownloadFactura (data){
  cargarConfigAPI();
  let optionDownload = {
    method: 'GET',
    headers: {
      'Authorization' : `${credential.TOKEN_TYPE} ${credential.TOKEN}`,
      'Accept' : 'application/json',
    },
    redirect : "follow"
  };
  return fetch(credential.URL+`/v1/bills/download-pdf/${data}`,optionDownload)
  .then(respuesta => respuesta.json())
  .then(answer => answer)
  .catch(error => console.error(error));
}

export {DownloadFactura};
