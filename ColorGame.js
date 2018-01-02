var numOfSquares = 6;

var colors = generateRandomColor(numOfSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

var messageDisplay = document.getElementById("message");
					// if querySelector("#message")
var h1 = document.querySelector("h1");

var reset = document.querySelector("#reset");

// var easyBtn = document.getElementById("easy");

// var hardBtn = document.getElementById("hard");

var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
//  Add MODE BUTTONS AND EVENT LISTENERS
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

// ternary operator
		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;	
		main();
		});
	}

// ADD SQUARE LISTENERS

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	// add event listeners to squares
	squares[i].addEventListener("click", function(){
	// grab color of picked square
	var clickedColor = this.style.background;
	// compare color to pickedColor
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!"
		changeColors(clickedColor);
		h1.style.background = clickedColor;
		reset.textContent = "Play Again?";
	} else {
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});

}
	
main();

};



function main(){
	// generate new colors
	colors = generateRandomColor(numOfSquares);
	// pick mystery color
	pickedColor = pickColor();
	// change color label in h1
	colorDisplay.textContent = pickedColor;
	reset.textContent = "New Colors";
	messageDisplay.textContent = "";
	// show the new colors generated
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}

	};
	h1.style.background = "steelblue";
};


reset.addEventListener("click", function(){
	main();
})


function changeColors(color){
// loop through for all squares
	for(var i = 0; i < squares.length; i++){
// change each color to match given color
		squares[i].style.background = color;
	}
};

function pickColor(){
// Math.floor results in whole integers, while random along
// does decimals
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColor(num){
// make an array
var arr = [];
// add num random colors to an array
for(var i = 0; i < num; i++){
	// get random num and push into array
	arr.push(randomColor())
};
// return array at the very end
return arr;
};

function randomColor(){
// pick a red from 0 - 255
var r = Math.floor(Math.random() * 256)
// pick a green from 0 - 255
var g = Math.floor(Math.random() * 256)
// pick a blue from 0 - 255
var b = Math.floor(Math.random() * 256)
return "rgb(" + r + ", " + g + ", " + b + ")";
};




