const accordion = document.getElementById("accordion");

for (let i of accordion.children) {
  i.addEventListener("click", (e) => {
    i.classList.toggle("expand");
  });
}
