const currentImage = document.getElementById("currentImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const images = [
  "SKETCH2023001.png",
  "SKETCH2023002.png",
  "SKETCH2023003.png",
  // Add more image URLs here
];

let currentIndex = 0;

prevButton.innerHTML = '<i class="fas fa-arrow-left"></i>';
nextButton.innerHTML = '<i class="fas fa-arrow-right"></i>';

prevButton.addEventListener("click", function() {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  currentImage.src = images[currentIndex];
});

nextButton.addEventListener("click", function() {
  currentIndex = currentIndex + 1;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  currentImage.src = images[currentIndex];
});
