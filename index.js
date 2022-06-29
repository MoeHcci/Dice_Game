// <!-- The javascript Section. Must be created in an "order of operation." First comes the image 1 code, then image 2, then the winner annoucment
// 1. The image element can be manipulated by modifying its .src
// 2. we set set the new variable which is equal to a different number each time (e.g., randomNumber1)
// 3. an if statement is created which changes the images everytime randomNumber1 changes by manipulating the .scr attribute
// 4. The title section's changing attribute is the .textContentttribute and it must be placed after the js for the images is done
// Note: The <img> tag has two required attributes: src - Specifies the path to the image. alt - Specifies an alternate text for the image, if the image for some reason cannot be displayed. -->

var randomNumber1 = Math.floor(Math.random() * (6 - 0) + 1);

if (randomNumber1 === 6) {
  document.getElementById('myImage_1').src = "inverted-dice-6.png"
} else if (randomNumber1 === 5) {
  document.getElementById('myImage_1').src = "inverted-dice-5.png"
} else if (randomNumber1 === 4) {
  document.getElementById('myImage_1').src = "inverted-dice-4.png"
} else if (randomNumber1 === 3) {
  document.getElementById('myImage_1').src = "inverted-dice-3.png"
} else if (randomNumber1 === 2) {
  document.getElementById('myImage_1').src = "inverted-dice-2.png"
} else if (randomNumber1 === 1) {
  document.getElementById('myImage_1').src = "inverted-dice-1.png"
}

var randomNumber2 = Math.floor(Math.random() * (6 - 0) + 1);

if (randomNumber2 === 6) {
  document.getElementById('myImage_2').src = "inverted-dice-6.png"
} else if (randomNumber2 === 5) {
  document.getElementById('myImage_2').src = "inverted-dice-5.png"
} else if (randomNumber2 === 4) {
  document.getElementById('myImage_2').src = "inverted-dice-4.png"
} else if (randomNumber2 === 3) {
  document.getElementById('myImage_2').src = "inverted-dice-3.png"
} else if (randomNumber2 === 2) {
  document.getElementById('myImage_2').src = "inverted-dice-2.png"
} else if (randomNumber2 === 1) {
  document.getElementById('myImage_2').src = "inverted-dice-1.png"
}

var winner = document.getElementById("winner_section");

//
// To add an emoji you can paste the emoji directly or use the String.fromCodePoint method. This method takes a codepoint value as its argument
// If the code point in HTML and CSS is U+ then for JS you replace it with U+


if (randomNumber1 > randomNumber2) {
  winner.textContent = "Player 1 Wins!" +String.fromCodePoint( 0x1F3C6) +String.fromCodePoint( 0x26F7)
} else if (randomNumber1 < randomNumber2) {
  winner.textContent = "Player 2 Wins! 🏆" +String.fromCodePoint( 0x1F3C2)
} else {
  winner.textContent = "Tie" +String.fromCodePoint( 0x1F611)
}


function refresh() {
  window.location.reload();
}
