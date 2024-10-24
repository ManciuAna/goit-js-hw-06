
const listEl = document.querySelector(".gallery");

console.log(listEl);



const makeGallery = ({ url, alt }) => `<li class="gallery-item">

<img class="gallery-img" src="${url}" alt= "${alt}"></li>`;

const markup = images.map((el) => makeGallery(el)).join("");



listEl.insertAdjacentHTML("afterbegin", markup);

