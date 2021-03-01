// Detecting Button Press
var numberOfButton = document.querySelectorAll(".drum").length;
for (i = 0; i < numberOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {
    var buttonText = this.innerHTML;
    buttonSoundMatcher(buttonText);
    buttonAnimation(buttonText);
  });
  // ALternative in returning back the animation ==>
  // document.querySelectorAll(".drum")[i].addEventListener("mouseleave", function () {
  //   this.classList.remove("pressed");
  // });
}

//Detecting Keyboard Pressed
document.addEventListener("keydown", function(event) {
  buttonSoundMatcher(event.key);
  buttonAnimation(event.key);
});
// ALternative in returning back the animation ==>
// document.addEventListener("keyup", function(event){
//   document.querySelector("." + event.key).classList.remove("pressed");
// })

function buttonSoundMatcher(theButton) {
  switch (theButton) {
    case 'w':
      var drum = new Audio("sounds/tom-1.mp3");
      drum.play();
      break;

    case 'a':
      var drum = new Audio("sounds/tom-2.mp3");
      drum.play();
      break;

    case 's':
      var drum = new Audio("sounds/tom-3.mp3");
      drum.play();
      break;

    case 'd':
      var drum = new Audio("sounds/tom-4.mp3");
      drum.play();
      break;

    case 'j':
      var drum = new Audio("sounds/snare.mp3");
      drum.play();
      break;

    case 'k':
      var drum = new Audio("sounds/crash.mp3");
      drum.play();

    case 'l':
      var drum = new Audio("sounds/kick-bass.mp3");
      drum.play();

    default:
      console.log(theButton);
  }
}

function buttonAnimation(chosenKey){
  var activeButton = document.querySelector("." + chosenKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}
