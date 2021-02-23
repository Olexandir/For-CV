import { Menu } from "./Menu.js";

const btn = document.querySelector(".btn-wrapper, .grey, .btn");
const mn = document.querySelector(".menu-wrapper");

const menu = new Menu({
  button: btn,
  menu: mn,
});

menu.clickHandler();
