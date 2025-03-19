document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-include]");
  elements.forEach(element => {
    const file = element.getAttribute("data-include");
    fetch(file)
    .then(data => data.text())
    .then(response => {
      element.innerHTML = response;
    })
    .catch(error => console.error(error));
  });
});

