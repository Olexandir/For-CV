class Menu {
  constructor(options) {
    this.button = options.button;
    this.menu = options.menu;
  }

  clickHandler() {
    this.button.addEventListener("click", (e) => {
      this.menu.classList.add("active");
    });
    this.menu.addEventListener("click", (e) => {
      this.menu.classList.remove("active");
    });
  }
}

export { Menu };
