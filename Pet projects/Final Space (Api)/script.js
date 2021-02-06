const CHARACTERS = "https://finalspaceapi.com/api/v0/character/";
const EPISODES = "https://finalspaceapi.com/api/v0/episode/";
const LOCATION = "https://finalspaceapi.com/api/v0/location/";
const QUOTES = "https://finalspaceapi.com/api/v0/quote/";

let inf = undefined;

let container = document.getElementById("container");

async function getCharacters(url) {
  const resp = await fetch(url);
  inf = await resp.json();

  console.log(inf);

  inf.forEach((i) => {
    let card = document.createElement("div");
    container.appendChild(card);

    card.classList.add("card");
    card.innerHTML = `
    <h1 class="id">${i.id}</h1>
    <div class="card__main">
      <div class="card__main-left">
        <img src="${i.img_url}" alt="" />
        <div class="gender"><b>Gender:</b> ${i.gender}</div>
      </div>
      <div class="card__main-right">
        <h1 class="name">${i.name}</h1>
        <h3 class="origin"><b>Origin:</b> ${i.origin}</h3>
        <h3 class="species">${i.species}</h3>
      </div>
    </div>
    <h2 class="status"><b>Status:</b> ${i.status}</h2>
    <div class="card__add">
      <div class="card__add-left">
        <h1 class="abilities">Abilities:</h1>
        <ul class="abilities__list">${i.abilities}</ul>
      </div>
      <div class="card__add-right">
        <h1 class="alias">Allias:</h1>
        <ul class="alias__list">${i.alias}</ul>
      </div>
    </div>
    `;

    getStatus();
  });
}

function getStatus() {
  let status = document.querySelectorAll(".status");
  statusArr = Array.from(status);
  statusArr.forEach((item) => {
    if (item.innerText == "Status: Alive") {
      item.classList.add("alive");
    } else if (item.innerText == "Status: Operational") {
      item.classList.add("operational");
    } else if (item.innerText == "Status: Deceased") {
      item.classList.add("deceased");
    } else if (item.innerText == "Status: Deceased (Possessed)") {
      item.classList.add("deceased-possessed");
    } else {
      item.classList.add("unknown");
    }
  });
}

function createList(arr) {
  arr.forEach((item) => {
    item.parentNode.innerHTML = `
<li>${item}</li>
`;
  });
}

getCharacters(CHARACTERS);

async function getEpisodes(url) {
  const resp = await fetch(url);
  inf = await resp.json();

  console.log(inf);
}

getEpisodes(QUOTES);
