let currentImageIndex = 0;
const images = [
  "SKETCH2023001.png",
  "SKETCH2023002.png",
  "SKETCH2023003.png",
  // Add more images here
];

const currentImage = document.getElementById("currentImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

currentImage.src = images[currentImageIndex];

prevButton.addEventListener("click", function() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  currentImage.src = images[currentImageIndex];
});

nextButton.addEventListener("click", function() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  currentImage.src = images[currentImageIndex];
});
