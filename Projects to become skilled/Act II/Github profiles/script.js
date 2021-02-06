let APIURL = "https://api.gitHub.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("Olexandir");

async function getUser(username) {
  const resp = await fetch(APIURL + username);
  const data = await resp.json();

  createUserCard(data);
  getREpos(username);
}

async function getREpos(username) {
  const resp = await fetch(APIURL + username + "/repos");
  const respData = await resp.json();

  addReposToCard(respData);
}

function createUserCard(user) {
  try {
    const cardHTML = `
  <div class="card">
    <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
        </div>

        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul class="info">

                <li>${user.followers}<strong>Followers </strong></li>
                <li>${user.following}<strong>Following </strong></li>
                <li>${user.public_repos}<strong>Repos </strong></li>

            </ul>
            <h4>Repos:</h4>
            <div id="repos"></div>
        </div>
    </div>
</div>
  `;

    main.innerHTML = cardHTML;
  } catch (e) {
    console.error(e);
  } finally {
    console.log("finaly");
  }
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos
    .sort((a, b) => b.stargzers_count - a.stargzers_count)
    .slice(0, 5)
    .forEach((repo) => {
      const repoEl = document.createElement("a");
      repoEl.classList.add("repo");
      repoEl.href = repo.html_url;
      repo.target = "_blank";
      repoEl.innerText = repo.name;
      reposEl.appendChild(repoEl);
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
