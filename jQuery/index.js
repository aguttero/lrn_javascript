// alert("js health-check ok");

$("h1").css("color", "yellow");
$("body").css("backgroundColor", "blue");
$("button").click(function () {
  $("h1").css("color", "purple");
});
// $("input").keydown(function (event) {
//   console.log(event.key);
// });
$("input").keydown(function (event) {
  $("h1").text(event.key);
});
