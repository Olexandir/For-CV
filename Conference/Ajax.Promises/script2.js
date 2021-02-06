// 1. Ищем base URL ('https://www.breakingbadapi.com/api/')

// Делаем через промис:

let p = new Promise((resolve) => {
  // 2. Создаем переменную, которая является экземпляром класса XMLHttpRequest
  let req = new XMLHttpRequest();

  // 3. Подготавливаем запрос c методом 'GET' и адресом базового урла, true (для асинхронного запроса)
  req.open("GET", "https://www.breakingbadapi.com/api/characters", true);

  // 4. Посылаем запрос
  req.send();

  req.addEventListener("load", () => {
    // 5. Созаем переменную для ответа и сразу же ее распарсиваем
    let data = JSON.parse(req.response);

    resolve(data);
  });
});

let container = document.getElementById("container");

p.then((data) => {
  data.forEach((element) => {
    let card = document.createElement("div");
    container.appendChild(card);

    card.classList.add("card");
    card.innerHTML = `

    <h2 class="name">${element.name}</h2>
    <h3 class="nickname">${element.nickname}</h3>
    <img src="${element.img}" alt="pop" class="portrait">
    <h1 class="status">${element.status}</h1>
    `;
  });
}).then(() => {
  let status = document.querySelectorAll("h1");
  statusArr = Array.from(status);
  statusArr.forEach((item) => {
    if (item.innerText == "Alive") {
      item.classList.add("alive");
    } else if (item.innerText == "Deceased") {
      item.classList.add("dead");
    } else if (item.innerText == "Presumed dead") {
      item.classList.add("hz");
    } else {
      item.classList.add("unknown");
    }
  });
});
