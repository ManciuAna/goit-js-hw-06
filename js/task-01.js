
const listItemElem = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItemElem.length}`);

listItemElem.forEach((element) =>

  console.log(

    `Category: ${element.firstElementChild.textContent}`,

    `Elements: ${element.lastElementChild.children.length}`

  )

);

