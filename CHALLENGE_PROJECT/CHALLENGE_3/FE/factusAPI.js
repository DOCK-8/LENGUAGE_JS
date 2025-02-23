const url = x => `https://api-sandbox.factus.com.co/v1/${x}`;

const options = {
  method : '',
  headers : {
    'Authorization' : `Bearer ${toker}`,
    'Accept' : 'application/json',
  }
};
async function verFacturasFactus(){
  options.method = 'GET';
  return await fetch(url("bills"),options)
  .then( respuesta => respuesta.json())
  .then( ans => ans.data.data)
  .catch( error => console.error(` ES ERROR PAPU ?? ${error}`));
}

function crearFacturaFactus(facturaJson){  
  let bodyJ = JSON.stringify(facturaJson);
  options.method = 'POST';
  options.body = bodyJ;
  options.redirect = "follow";

  console.log(options.body);

  fetch(url("bills/validate"), options)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}

export {verFacturasFactus, crearFacturaFactus}
