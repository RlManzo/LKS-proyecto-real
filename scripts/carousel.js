let currentImage = 1;
const totalImages = 4;
let carouselInterval;

function changeImage(imageNumber, button) {
  if (imageNumber !== currentImage) {
    document.getElementById(`box-imagen${currentImage}`).classList.remove("active");
    document.getElementById(`box-imagen${imageNumber}`).classList.add("active");
    document.querySelector(".carousel-button.active").classList.remove("active");
    button.classList.add("active");
    currentImage = imageNumber;
  }
}

function startCarousel() {
  carouselInterval = setInterval(() => {
    let nextImage = currentImage + 1;
    if (nextImage > totalImages) {
      nextImage = 1;
    }
    const nextButton =  document.getElementById(`button${nextImage}`)
    changeImage(nextImage, nextButton);
  }, 8000);
}

function stopCarousel() {
  clearInterval(carouselInterval);
}

startCarousel();