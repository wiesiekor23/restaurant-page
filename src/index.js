import "./styles.css";
import {mainPage} from "./mainPage.js";
import {menuPage} from "./menuPage.js";
import {aboutPage} from "./aboutPage.js";

const content = document.querySelector("#content");

const mainBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

function listen() {
    mainBtn.addEventListener("click", function() {
        clearContent();
        mainPage();
    });
    menuBtn.addEventListener("click", function() {
        clearContent();
        menuPage();
    });
    aboutBtn.addEventListener("click", function() {
        clearContent();
        aboutPage();
    })
}

function clearContent() {
    content.innerHTML = "";
}

mainPage();
listen();