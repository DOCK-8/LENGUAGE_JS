import factura from "../factura.json" with {type : "json"};
function FacturaGeneralCreate(data){
  factura.numbering_range_id = data.numbering_range_id;
  factura.reference_code = data.code;
  factura.observation = data.observation;
  factura.payment_form = data.payment_form;
  factura.payment_due_date = data.payment_due_date;
  factura.payment_method_code = data.payment_method_code;
  factura.billing_period.start_date = data.billing_start_date;
  factura.billing_period.start_time = data.billing_start_time + ":00";
  factura.billing_period.end_date = data.billing_end_date;
  factura.billing_period.end_time = data.billing_end_time + ":00";
  console.log(factura);
}

export {FacturaGeneralCreate};
