// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");



if (carousel) {
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" }); 
    });

    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" }); 
    });
    const premierItem = document.querySelector(".carousel__item");
    const scrollAmount = premierItem.clientWidth;
}

