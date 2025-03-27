function buttonsNavegateForm (){
  document.querySelectorAll(".next-button").forEach(button => {
    button.addEventListener("click", e => {
      let divFather = e.target.parentElement.parentElement;
      let divBrother = divFather.nextElementSibling;
      if(divBrother){
        divFather.style.display = "none";
        divBrother.style.display = "grid";
      }
    });
  });
  document.querySelectorAll(".previus-button").forEach(button => {
    button.addEventListener("click", e => {
      let divFather = e.target.parentElement.parentElement;
      let divBrother = divFather.previousElementSibling;
      divFather.style.display = "none";
      divBrother.style.display = "grid";
    });
  });
}

export {buttonsNavegateForm};
