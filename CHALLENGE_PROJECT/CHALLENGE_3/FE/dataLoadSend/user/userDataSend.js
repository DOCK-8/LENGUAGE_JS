import factura from "../factura.json" with {type : "json"};
function FacturaUserCreate(data){
  factura.customer.identification = data.customer_identification;
  factura.customer.dv = "";
  factura.customer.company = data.customer_company;
  factura.customer.trade_name = data.customer_trade_name;
  factura.customer.names = data.customer_name;
  factura.customer.address = data.customer_address;
  factura.customer.email = data.customer_email;
  factura.customer.phone = data.customer_phone;
  factura.customer.legal_organization_id = data.customer_legal_organization;
  factura.customer.tribute_id = data.customer_tribute;
  factura.customer.identification_document_id = data.customer_identification_document;
  factura.customer.municipality_id = data.customer_municipality;
}

export {FacturaUserCreate};
