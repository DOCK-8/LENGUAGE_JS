import {ShowFactura} from "../apiFacturaShow/facturaShow.js";
import {DownloadFactura} from "../apiFacturaDownload/facturaDownload.js";

async function ShowDataFactura(){
  let downloadF = await DownloadFactura(localStorage.getItem("factura"));
  let data = await ShowFactura(localStorage.getItem("factura"));

  console.log(data.data);

  const $ = element => document.getElementById(element);
  const $$ = (data,elem) => $(elem).textContent = data;

  let company = data.data.company;
  let customer = data.data.customer;
  let bill = data.data.bill;

  $("logo").setAttribute("src",company.url_logo);
  $$(company.company,"title");
  $$(company.nit,"nit");
  $$(company.phone,"tel");
  $$(company.email,"correo");
  $$(customer.names,"cliente_name");
  $$(customer.identification,"cliente_id");
  $$(customer.address,"cliente_direccion");
  $$(bill.number,"factura_number");
  $$(bill.created_at,"factura_fecha");
  $$(bill.gross_value,"factura_pagar");
  $("qr").setAttribute("src",bill.qr_image);
  $("dial_button").setAttribute("href",bill.qr);
  $("show-button").setAttribute("href", "data:application/pdf;base64,"+downloadF.data.pdf_base_64_encoded);

  $("show-button").style.display = "flex";
  $("dial_button").style.display = "flex";
}

export {ShowDataFactura};
