$(document).ready(function () {
  $(".show").click(function() {
    $("#initially-hidden").slideDown();
    $("#initially-showing").slideUp();
  });
  $(".hide").click(function() {
    $("#initially-hidden").slideUp();
    $("#initially-showing").slideDown();
  });
});
