function createTableItem(item){
  let tableItem = `
  <tr>
    <td>${item.code}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.quantity}</td>
    <td>${item.discount}</td>
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
function itemButtons(){
  document.querySelectorAll(".delete-item").forEach(button => {
    button.addEventListener("click", e =>{
    console.log("hola");
    })
  });
  document.querySelectorAll(".edit-item").forEach(button => {
    button.addEventListener("click", e =>{
    console.log("hola");
    })
  });
}
