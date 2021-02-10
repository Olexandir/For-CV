import { Heart } from "./heart.js";

class removeHeart extends Heart {
  constructor(options) {
    super(options);
  }
  timeout() {
    setTimeout(super.deleteHeart.bind(this), 10000);
  }
}

export { removeHeart };
