import { removeHeart } from "./remove.js";
import { hearts } from "./heart.js";

let heart = new removeHeart({

  colors: hearts,
  class: "heart",
});

setInterval(heart.createHeart.bind(heart), 1000);
setInterval(heart.timeout.bind(heart), 1000);
