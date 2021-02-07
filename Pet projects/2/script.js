let CHARACTERS = "https://rickandmortyapi.com/api/character/";
let container = document.querySelector(".container");
let search = document.getElementById("search");
let card = document.querySelectorAll(".container__card");
let closeBtn = document.querySelectorAll(".close");
let popup = document.getElementById("popup-container");

async function characterRender(arr) {
  for (let i = 0; i < arr.length; i++) {
    let card = document.createElement("div");
    card.classList.add("container__card");

    card.innerHTML = `
    <img src="${arr[i].image}" alt="${arr[i].status}" class="container__card-img">
    `;
    container.appendChild(card);

    getShadowAtStatus();

    card.addEventListener("click", (e) => {
      popup.innerHTML = `
        <div class="popup__card-container">
          <div class="card">
            <div class="card__left">
              <img src="${arr[i].image}" alt="${arr[i].name}" class="card__left-img" />
            </div>
            <div class="card__right">
              <div class="name-close">
                <h1 class="card__right-name">${arr[i].name}</h1>
                <button class="close">X</button>
              </div>
              <h1 class="card__right-gender">${arr[i].gender}</h1>
              <h1 class="card__right-location">${arr[i].location.name}</h1>
              <h1 class="card__right-status">${arr[i].status}</h1>
            </div>
          </div>
        </div>
    `;

      popup.classList.remove("hidden");
    });
  }
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });
}

async function getStatusToStatus() {
  let status = document.querySelectorAll(".card__right-status");
  statusArr = Array.from(status);
  statusArr.forEach((item) => {
    if (item.innerText == "Alive") {
      item.classList.add("alive");
    } else if (item.innerText == "Dead") {
      item.classList.add("dead");
    } else if (item.innerText == "unknown") {
      item.classList.add("unknown");
    } else {
      item.classList.add("what");
    }
  });
}

async function getShadowAtStatus() {
  let status = document.querySelectorAll(".container__card-img");
  statusArr = Array.from(status);
  statusArr.forEach((item) => {
    if (item.alt == "Alive") {
      item.parentNode.classList.add("alive");
    } else if (item.alt == "Dead") {
      item.parentNode.classList.add("dead");
    } else if (item.alt == "unknown") {
      item.parentNode.classList.add("unknown");
    } else {
      item.parentNode.classList.add("what");
    }
  });
}

async function FULURL(url) {
  let nums = [];
  for (let i = 1; i <= 671; i++) {
    nums.push(i);
  }
  let characters = url + nums.toString();
  let req = await fetch(characters);
  res = await req.json();
  /*   console.log(res); */

  await characterRender(res);
}
/*
search.addEventListener("submit", (e) => {
  e.preventDefault();
  getCharacterBySearch();
});
 */
/* async function getCharacterBySearch(name) {
  const req = await fetch(
    "https://rickandmortyapi.com/api/character/?name" + name
  );

  const res = await req.json();
  const char = res.name;
  return char;
} */

FULURL(CHARACTERS);

/*

    <div class="card__left">
      <img src="${arr[i].image}" alt="${arr[i].name}" class="card__left-img" />
    </div>
    <div class="card__right">
      <h1 class="card__right-name">${arr[i].name}</h1>
      <h1 class="card__right-gender">${arr[i].gender}</h1>
      <h1 class="card__right-location">${arr[i].location.name}</h1>
      <h1 class="card__right-status">${arr[i].status}</h1>
    </div>

*/
