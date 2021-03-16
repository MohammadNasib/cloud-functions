const requestModal = document.querySelector(".new-request");
const requestLink = document.querySelector(".add-request");
const close = document.querySelector(".close");

// open request modal

requestLink.addEventListener("click", () => {
    requestModal.classList.add("open");
});

// close request modal

close.addEventListener("click", () => {
    requestModal.classList.remove("open");
});
