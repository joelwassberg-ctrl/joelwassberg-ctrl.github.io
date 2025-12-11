const button = document.querySelector(".button");
const hiddenElements = document.querySelectorAll(".hidden");
const body = document.body;

button.addEventListener("click", () => {
  hiddenElements.forEach(el => {
    el.classList.toggle("show");
    body.style.backgroundImage = "url('deepwokenl2bridge.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "fixed";   
  });
});