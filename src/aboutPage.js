export function aboutPage() {
    const content = document.querySelector("#content");

    const aboutTitle = document.createElement("p");
    aboutTitle.classList.add("title");
    aboutTitle.textContent = "Bitter & Twisted";
    content.appendChild(aboutTitle);

    const aboutContent = document.createElement("p");
    aboutContent.classList.add("description");
    aboutContent.textContent = "Established accidentally in 2012 after a coffee spill turned into a business plan, Black Coffee is your neighborhood’s unofficial caffeine HQ. We serve dangerously good brews, toast that talks back, and vibes that range from “mildly eccentric” to “full-blown espresso-fueled genius.” Come for the coffee, stay for the questionable playlists and oddly satisfying wall art.";
    content.appendChild(aboutContent);
 }