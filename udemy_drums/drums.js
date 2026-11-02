var numberOfButtons = document.querySelectorAll(".drum").length;
console.log(numberOfButtons);

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    console.log(buttonInnerHtml);
    switch (buttonInnerHtml) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      default:
        console.log(this.innerHtml);
    }
  });
}
