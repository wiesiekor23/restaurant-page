import coffeeImg from "./jon-tyson-pEGyLHAPfVw-unsplash.jpg";

export function mainPage() {
    const content = document.querySelector("#content");
    const mainTitle = document.createElement("p");
    mainTitle.classList.add("title");
    mainTitle.textContent = "Bitter & Twisted";
    content.appendChild(mainTitle);
    
    const mainPic = document.createElement("img");
    mainPic.src = coffeeImg;
    mainPic.width = 320;
    mainPic.alt = "neon 'coffee` sign";
    mainPic.classList.add("main-pic");
    content.appendChild(mainPic);
    
    const mainDescription = document.createElement("p");
    mainDescription.classList.add("coffee");
    mainDescription.textContent = "Coffee first, adulting second. At Bitter & Twisted, we serve up bold brews, cozy vibes, and just the right amount of sass. Swing by, sip slow, and stay weird.";
    content.appendChild(mainDescription);
}