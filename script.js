const acordionItem = document.querySelector(".acordions-container");
acordionItem.addEventListener("click", function (e) {
  if (e.target.parentElement.classList.contains("open-icon")) {
    e.target.closest(".acordion-item").classList.toggle("open-acordion");
  }
});
