const type = document.querySelector(".typing");
const text = type.innerHTML;
let i = 0;

window.addEventListener("load", () => {
  typing();
});

function typing() {
  type.innerHTML = type.innerHTML.replace("|", "");
  if (i >= text.length) {
    i = 0;
  }
  if (i < text.length) {
    if (i == 0) {
      type.innerHTML = text[i];
    } else {
      type.innerHTML += text[i];
    }
    type.innerHTML += "|";
    i++;
  }
  setTimeout(() => {
    typing();
  }, 70);
}
