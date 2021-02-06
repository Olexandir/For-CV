const sounds = [
  "discord-join",
  "discord-leave",
  "frog",
  "quack",
  "sad-violin",
  "wet-fart",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });
  document.body.appendChild(btn);
});

function stopSounds() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
