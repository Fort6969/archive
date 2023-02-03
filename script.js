$(document).ready(function() {
  var currentPage = 1;
  var numPages = 3;

  $("#prevButton").click(function() {
    if (currentPage > 1) {
      currentPage--;
      $("#comicImg").attr("src", "comic" + currentPage + ".png");
    }
  });

  $("#nextButton").click(function() {
    if (currentPage < numPages) {
      currentPage++;
      $("#comicImg").attr("src", "comic" + currentPage + ".png");
    }
  });
});
