import factura from "../factura.json" with {type : "json"};
import item from "../item.json" with {type : "json"};
import {createTableItem, loadTableItem} from "./itemStructCreate.js"
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
  document.querySelector("#itemsTable tbody").innerHTML += createTableItem(data);
  deleteButtonItem();
  editButtonItem();
}
function deleteButtonItem(){
  document.querySelectorAll(".delete-item").forEach(button => {
    button.addEventListener("click", e =>{
      let tr = e.target.closest("tr");
      factura.items.splice(tr.rowIndex-1, 1);
      tr.remove();
      console.log(factura);
    })
  });
}
function editButtonItem(){
  document.querySelectorAll(".edit-item").forEach(button => {
    button.addEventListener("click", e =>{
    let num = e.target.closest("tr").rowIndex-1;
    loadTableItem(factura.items[num]);
    })
  });
}

export {FacturaItemCreate};
