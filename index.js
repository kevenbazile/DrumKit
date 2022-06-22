// eventlistener is what you would use to tell us when the user clicks the sound to input the correct music effect.
// create a function that does something when button is clicked
// create a selector to select the function handleClick and run that run function and an event listenerto listen when it gets clicked
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked!");
// }
// this function above should send an alert when first button is clicked
// eventlisteners are waiting for message to run a function

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSounds(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    // var audio = new Audio ('sounds/tom-1.mp3');
    // audio.play();
  });
}
// animation to play the audio sound and function to generate sounds if unique keys are pressed
// also event listeners to listen for the key inputs of the sounds being pressed

document.addEventListener("keypress", function (event) {
  makeSounds(event.key);
  buttonAnimation(event.key);
});

function makeSounds(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      consol.log(buttonInnerHTML);
  }
}
// animation for buttons to return back to normal state after being pressed

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
  //   document.getElementById("currentkey").classList.add("main"); wrong answer answer above how to add buttons
  // button animations by selecting css using javascript
}
