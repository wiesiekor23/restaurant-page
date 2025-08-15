import "./styles.css";
import {mainPage} from "./mainPage.js";

const content = document.querySelector("#content");

const mainBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

function listen() {
    mainBtn.addEventListener("click", function() {
        clearContent();
        mainPage();
        alert("main");
    });
    menuBtn.addEventListener("click", function() {
        clearContent();
        alert("menu");
        //menuPage();
    });
    aboutBtn.addEventListener("click", function() {
        clearContent();
        alert("about");
        //aboutPage();
    })
}

function clearContent() {
    content.innerHTML = "";
}

mainPage();
listen();