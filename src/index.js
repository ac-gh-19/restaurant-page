import "./global.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";

let homePageBtn = document.querySelector("#homeBtn");
let menuPageBtn = document.querySelector("#menuBtn");

homePageBtn.addEventListener("click", loadHomePage);
menuPageBtn.addEventListener("click", loadMenuPage);

loadHomePage();

