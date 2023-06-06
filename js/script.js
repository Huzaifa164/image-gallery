const fullImage = document.getElementById("full-image");
const closeIcon = document.getElementById("close-icon");
const openedImage = document.getElementById("opened-image");

function handleClick(source) {
    fullImage.style.display = "flex";
    openedImage.src = source;
}

closeIcon.addEventListener("click", () => {
    fullImage.style.display = "none";
})