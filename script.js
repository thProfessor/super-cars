$(document).ready(function () {
  $(".bg-dark").on("click", () => {
    $(".cars img").toggleClass("animate__slideInLeft");
    $(".cars img").addClass("animate__fadeInLeft");
    $(".cars img").attr("src", "./images/black.png");
  });

  $(".white").on("click", () => {
    $(".cars img").toggleClass("animate__slideInLeft");
    $(".cars img").addClass("animate__fadeInLeft");
    $(".cars img").attr("src", "./images/red.png");
  });

  $(".color").on("click", () => {
    $(".cars img").toggleClass("animate__slideInLeft");
    $(".cars img").addClass("animate__fadeInLeft");
    $(".cars img").attr("src", "./images/yellow.png");
  });
});
