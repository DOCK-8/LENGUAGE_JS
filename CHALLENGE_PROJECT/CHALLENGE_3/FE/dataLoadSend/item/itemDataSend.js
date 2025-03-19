import factura from "../factura.json" with {type : "json"};
import item from "../item.json" with {type : "json"};
function FacturaItemCreate(data){
  item.code_reference = data.item_code_reference;
  item.name = data.item_name;
  item.quantity = data.item_quantity;
  item.discount_rate = data.item_discount_rate;
  item.price = data.item_price;
  item.tax_rate = data.item_tax_rate;
  item.unit_measure_id = data.item_unit_measure;
  item.standard_code_id = data.item_standart_code;
  item.is_excluded = !data.item_exclude ? 0 : 1;
  item.tribute_id = data.item_tribute;
  // item.withholding_taxes = ;
  factura.items.push({...item});
}

export {FacturaItemCreate};
