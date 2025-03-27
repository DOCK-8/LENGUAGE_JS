function createTableItem(item){
  let tableItem = `
  <tr>
    <td>${item.item_code_reference}</td>
    <td>${item.item_name}</td>
    <td>${item.item_price}</td>
    <td>${item.item_quantity}</td>
    <td>${item.item_discount_rate}</td>
    <td>
      <div class = "container-flex">
        <div class = "delete-item">
          <svg class = "icons-navegate">
            <use xlink:href = "../src/icons/iconos.svg#delete-item"></use>
          </svg>
        </div>
        <div class = "edit-item">
          <svg class = "icons-navegate">
            <use xlink:href = "../src/icons/iconos.svg#edit-item"></use>
          </svg>
        </div>
      </div>
    </td>
  </tr>
  `
  return tableItem;
}

function loadTableItem(item){
  const $ = elemento => document.querySelector(elemento);
  $("#itemCodeReference").value = item.code_reference;
  $("#itemName").value = item.name;
  $("#itemQuantity").value = item.quantity;
  $("#itemDiscountRate").value = item.discount_rate;
  $("#itemDiscountData").textContent = item.discount_rate;
  $("#itemPrice").value = item.price;
  $("#itemTaxRate").value = item.tax_rate;
  $("#itemTaxData").textContent = item.tax_rate;
  $("#itemUnitMeasure").value = item.unit_measure_id;
  $("#itemStandardCode").value = item.standard_code_id;
  $("#itemIsExcluded").checked = item.is_excluded == 1 ? "on" : "off";
  $("#itemTribute").value = item.tribute_id;
}

export {createTableItem, loadTableItem};
