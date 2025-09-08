import catImg from "../catpfp.jpg";


function createHeader(text) {
    let header = document.createElement("h1");
    header.textContent = text;
    return header;
}

function createImg(src) {
    let img = document.createElement("img");
    img.src = src;
    return img;
}

function createParagraph(text) {
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHomePage() {
    let homePage = document.querySelector("#content");
    let homePageContainer = document.createElement("div");
    homePageContainer.classList.add("contentBody");

    homePage.textContent = "";
    homePageContainer.appendChild(createHeader("OUURRRR RRESATURANT"));
    homePageContainer.appendChild(createImg(catImg));
    homePageContainer.appendChild(createParagraph("Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolores laborum ut non voluptatem itaque hic asperiores ab similique reprehenderit ducimus, placeat, quidem amet odio corporis velit ipsa, cupiditate eos incidunt. Enim soluta cum in, corporis veritatis quam perferendis iste consequatur iure distinctio, mollitia nostrum cumque dolorem ex officiis reiciendis perspiciatis, odio illo quasi velit hic fuga? Modi earum eligendi nam ipsum. Harum, eius repellendus totam eos repudiandae iure possimus rerum maxime minus quaerat alias nobis esse laborum tempora cupiditate?"));
    homePage.appendChild(homePageContainer);
};


export default loadHomePage;