const url = x => `https://api-sandbox.factus.com.co/v1/${x}`;

const options = {
  method : '',
  headers : {
    'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZGVkZTk4Zi03MTkxLTQ0ZWUtYmExNS03MDA2MWUwOGNiMmMiLCJqdGkiOiJlN2Y3N2M2OTIyNzRkMmExMWRhOTVlZDNmOTU4MWQ3MDk2ZjQ5ZWQwNjY0YjUyYjZkZGY0NzJhOTY4MmJlY2Y2MmMzZjBhZmNkMTlhYzc1YiIsImlhdCI6MTc0MDIyMzk0Ny40NzU2MDgsIm5iZiI6MTc0MDIyMzk0Ny40NzU2MSwiZXhwIjoxNzQwMjI3NTQ3LjQ1MzMxNCwic3ViIjoiMyIsInNjb3BlcyI6W119.EaBz52nxUL8hhsw6HTWlgWuY0GUXVYpUDFoiAlLyDShpCtUASSkZgCcSZ2veX3Z0Qrg9e1wzB47fYpUwCox1WFsMznvOx3la6jTcOrRnXpbFyEQhrgNP6BTFlt-T36cVEpr9NfkPPusQb3oFPHf1hdHJXZjIJ3UF7UWS6L_o8LAhZgIqDrgA6gp5E5ovIZc1aztHCiDwNtlBXjjUKFhifDj6balfjiTJZDe-MAFImSxvEiNHZ-1PQU1n5LyB0Je-Zi4__NKS7YqS1c1OGs8FcY1Z3HtBc9kX-c2jc2G6rS9PZUHFW65-ZEV3MViigKig7Z5uPKdDu_lz-VoAipwO5XPTzKgXDYemfPZiNhMFQXtWa52YPW-p2Teu-QfPqsME7hR_zbX2GMPYOFhvBJDVGA2V3PAvRLt4PbY4P7LRd3y1v_0AvXbciCbJ66pbqJeiSUC3ydnP-xOvtrh3lCFrRlUGGtIxxYpFEJcHMzwC7tUylDANRZ2QteNdomYw_ar5xhUT1CB7hlhFqPYgbrHChg4_y7rQxGRJCXJ5at4Nmcj4z2MqBh2rPPB-aglJ8RtddIHPyfEhC_o_cAwLc4Dqn4je9WVJ3oiz7x4t4uUMWAEkCRdXEQIuAiTDj6kjVIOKb1qoF_ZGWt_FTMDfMUbYl8_DtnvJDJ6lKZFGdnPzpS8',
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
