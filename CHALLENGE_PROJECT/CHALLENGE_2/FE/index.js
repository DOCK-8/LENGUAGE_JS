// IMPORTS
import {testAPI} from "./api.js"
// FUNTION TO DISPLAY NODE EQUAL NONE
// wn = Node;
// wn.style.display = none
var ac = false;
const display = (wn, state) => {
  if(state){
    wn.showModal();
    if(ac)
      return;
    let template = document.getElementById("movie-select-template").content.cloneNode(true);
    wn.appendChild(template);
    document.querySelector(".close-icon").addEventListener( "click", () => {display(us, false);});
    ac = true;
  }
  else
    wn.close();
};
let us = document.getElementById("movie-select-dialog");
let movies = document.querySelectorAll(".movies-card");
movies.forEach((movie) => {
  movie.addEventListener("click", () => {display(us, true)});
});

// testAPI().then(answer => console.log(answer))
// .catch(error => console.error(error));
console.log(testAPI());
