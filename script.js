$(document).ready(function () {
  $("#myImage1")
    .mouseover(function () {
      $(this).css({
        "box-shadow": "0px 0px 50px rgba(255, 0, 0, 0.5)",
        transform: "scale(1.1)",
      });
    })
    .mouseout(function () {
      $(this).css({
        "box-shadow": "none",
        transform: "scale(1)",
      });
    });

  $("#myImage2")
    .mouseover(function () {
      $(this).css({
        "box-shadow": "0px 0px 50px rgba(255, 0, 0, 0.5)",
        transform: "scale(1.1)",
      });
    })
    .mouseout(function () {
      $(this).css({
        "box-shadow": "none",
        transform: "scale(1)",
      });
    });

  $("#myImage3")
    .mouseover(function () {
      $(this).css({
        "box-shadow": "0px 0px 50px rgba(255, 0, 0, 0.5)",
        transform: "scale(1.1)",
      });
    })
    .mouseout(function () {
      $(this).css({
        "box-shadow": "none",
        transform: "scale(1)",
      });
    });
});
