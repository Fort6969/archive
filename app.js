const comicContainer = document.getElementById("comic-container");
const comicImage = document.getElementById("comic-image");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

let currentComic = 1;
const totalComics = 3;

previousButton.addEventListener("click", () => {
  if (currentComic === 1) {
    return;
  }
  currentComic--;
  comicImage.src = `comic-${currentComic}.png`;
});

nextButton.addEventListener("click", () => {
  if (currentComic === totalComics) {
    return;
  }
  currentComic++;
  comicImage.src = `comic-${currentComic}.png`;
});
