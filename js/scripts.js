const shareWrapper = document.querySelector(".share-wrapper");
const sharePopup = document.querySelector(".share-popup");

shareWrapper.addEventListener("click", function () {
    sharePopup.classList.toggle("active");
});
