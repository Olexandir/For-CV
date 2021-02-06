const btn = document.getElementById("btn");
const container = document.getElementById("container");

function createNotif() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerText = "Created Toast Notification";
  container.appendChild(notif);
  notif.style.opacity = 1;

  setTimeout(() => {
    notif.style.opacity = 0;
    notif.remove();
  }, 3000);
}

btn.addEventListener("click", () => {
  createNotif();
});
