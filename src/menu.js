function createCard(title) {
    let el = document.createElement("div");
    let header = document.createElement("h1");
    header.textContent = title;
    let text = document.createElement("p");
    text.textContent = "LJSDF klFJLDFJL KSJGKLWL VSGLSK JKLRJS GDSD";
    el.appendChild(header);
    el.appendChild(text);
    el.classList.add("card");
    return el;
}

function loadMenuPage() {
    let homePage = document.querySelector("#content");
    let menuPageContainer = document.createElement("div");
    menuPageContainer.classList.add("cardContent");

    homePage.textContent = "";
    menuPageContainer.appendChild(createCard("food")); 
    menuPageContainer.appendChild(createCard("food")); 
    menuPageContainer.appendChild(createCard("food")); 
    menuPageContainer.appendChild(createCard("food")); 
    menuPageContainer.appendChild(createCard("food")); 
    menuPageContainer.appendChild(createCard("food")); 
    homePage.append(menuPageContainer);
};

export default loadMenuPage;