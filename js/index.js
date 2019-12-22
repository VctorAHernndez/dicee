var randomNumber1 = Math.round(Math.random() * 5 + 1); // 1 through 6

var randomNumber2 = Math.round(Math.random() * 5 + 1); // 1 through 6

var diceLeft = document.querySelector(".img1");

	diceLeft.setAttribute("src", "img/dice" + randomNumber1 + ".png") // img/dice{number}.png

var diceRight = document.querySelector(".img2");
	
	diceRight.setAttribute("src", "img/dice" + randomNumber2 + ".png") // img/dice{number}.png

var title = document.querySelector("#title"); // select the title to change text

var flag1 = document.querySelector(".flag1"); // select the left dice's flag

var flag2 = document.querySelector(".flag2"); // select the right dice's flag

// Change the text depending on the result
if(randomNumber1 > randomNumber2) {
	title.textContent = "Player 1 Wins!";
	flag1.style.visibility = "visible";
	flag2.style.visibility = "hidden";
} else if(randomNumber1 < randomNumber2) {
	title.textContent = "Player 2 Wins!";
	flag1.style.visibility = "hidden";
	flag2.style.visibility = "visible";
} else {
	title.textContent = "Draw!";
	flag1.style.visibility = "hidden";
	flag2.style.visibility = "hidden";
}
