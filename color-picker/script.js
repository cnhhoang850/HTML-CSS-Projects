const color = document.getElementsByClassName("color");
const setting = document.getElementsByClassName("setting");
const button = document.getElementsByClassName("set")[0];
function reveal() {
  color[0].classList.add("return");
  setting[0].classList.add("return");
  button.removeEventListener("click", reveal);
  button.addEventListener("click", hide);
}

function hide() {
  color[0].classList.remove("return");
  setting[0].classList.remove("return");
  button.removeEventListener("click", hide);
  button.addEventListener("click", reveal);
}

button.addEventListener("click", reveal);
