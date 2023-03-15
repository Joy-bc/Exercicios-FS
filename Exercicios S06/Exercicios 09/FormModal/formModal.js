let openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

const modal = document.getElementById("modal");
const fade = document.getElementById("fade");

const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalBtn, closeModalBtn, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });
