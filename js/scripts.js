$(document).ready(function () {
  $(".clickable").click(function() {
    $("#initially-hidden").fadeToggle();
    $("#initially-showing").toggle();
  });
});
