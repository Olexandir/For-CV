const quant = document.getElementsByClassName("quantaty");
const mainEl = document.getElementById("main_info");
const main = document.getElementById("main");
const one = document.querySelector(".sub_one");
const two = document.querySelector(".sub_two");
const three = document.querySelector(".sub_three");

let p = new Promise((resolve, reject) => {
  let req = new XMLHttpRequest();
  req.open("GET", "https://test.spaceflightnewsapi.net/api/v2/articles", true);
  req.send();

  req.addEventListener("load", (e) => {
    let data = JSON.parse(req.response);
    resolve(data);
  });
  req.addEventListener('error', ()=>{
    console.warn('Эрар!!!');
    reject()
  })
});

p.then((data) => {
  for (let i = 0; i < 6; i++) {
    const mainCard = document.createElement("div");
    mainCard.classList.add("mainCard");
    mainEl.appendChild(mainCard);
    mainCard.innerHTML = `
  <h3>${data[i].title}</h3>
   <img src="${data[i].imageUrl}" alt=''>
   <div class="text">${data[i].summary}</div>
  `;
  }
});
