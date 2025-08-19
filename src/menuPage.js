export function menuPage() {
    const content = document.querySelector("#content");
    const menuTitle = document.createElement("p");
    menuTitle.classList.add("title");
    menuTitle.textContent = "Bitter & Twisted Menu";
    content.appendChild(menuTitle);

    const menuList = document.createElement("div");
    content.appendChild(menuList);

    const coffeeOne = document.createElement("div");
    coffeeOne.classList.add("coffee");
    menuList.appendChild(coffeeOne);

    const coffeeOneName = document.createElement("p");
    coffeeOneName.classList.add("coffee-name");
    coffeeOneName.textContent = "The Morning Hustle";
    coffeeOne.appendChild(coffeeOneName);

    const coffeeOneDescription = document.createElement("p");
    coffeeOneDescription.classList.add("description");
    coffeeOneDescription.innerHTML = "Classic espresso with a kick of caramel and a whisper of cinnamon.<br> For the go-getters and the groggy alike.";
    coffeeOne.appendChild(coffeeOneDescription);

    const coffeeTwo = document.createElement("div");
    coffeeTwo.classList.add("coffee");
    menuList.appendChild(coffeeTwo);

    const coffeeTwoName = document.createElement("p");
    coffeeTwoName.classList.add("coffee-name");
    coffeeTwoName.textContent = "Cloud Nine Latte";
    coffeeTwo.appendChild(coffeeTwoName);

    const coffeeTwoDescription = document.createElement("p");
    coffeeTwoDescription.classList.add("description");
    coffeeTwoDescription.innerHTML = "Steamed oat milk over a mellow vanilla bean espresso.<br> Light, dreamy, and vegan-friendly.";
    coffeeTwo.appendChild(coffeeTwoDescription);

    const coffeeThree = document.createElement("div");
    coffeeThree.classList.add("coffee");
    menuList.appendChild(coffeeThree);

    const coffeeThreeName = document.createElement("p");
    coffeeThreeName.classList.add("coffee-name");
    coffeeThreeName.textContent = "Bitter & Brilliant";
    coffeeThree.appendChild(coffeeThreeName);

    const coffeeThreeDescription = document.createElement("p");
    coffeeThreeDescription.classList.add("description");
    coffeeThreeDescription.innerHTML = "A dark roast pour-over with notes of cocoa and burnt orange.<br> For those who like their coffee like their wit—sharp and unforgettable.";
    coffeeThree.appendChild(coffeeThreeDescription);
}