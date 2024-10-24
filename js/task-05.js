const nameInputEl = document.querySelector("#name-input");

const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (e) => {

  if (e.currentTarget.value === "") {

    nameOutputEl.textContent = "Anonymous";

  } else {

    nameOutputEl.textContent = e.currentTarget.value;

  }

});