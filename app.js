const comicPage = document.getElementById("comic-page");
const prevPage = document.getElementById("prev-page");
const nextPage = document.getElementById("next-page");

let pageNumber = 1;

prevPage.addEventListener("click", function() {
  if (pageNumber > 1) {
    pageNumber--;
    comicPage.src = `page${pageNumber}.jpg`;
  }
});

nextPage.addEventListener("click", function() {
  if (pageNumber < 3) {
    pageNumber++;
    comicPage.src = `page${pageNumber}.jpg`;
  }
});
