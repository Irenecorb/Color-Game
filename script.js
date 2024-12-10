
let numSquares = 6;
let colors = generateRandomColors(numSquares);

const cuadrados = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easyButton");
let hardButton = document.querySelector("#hardButton");
let h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;

for (let i = 0; i < cuadrados.length; i++){
    cuadrados[i].style.backgroundColor = colors[i];
}

for(let i = 0; i < cuadrados.length; i++){
	cuadrados[i].style.backgroundColor = colors[i];

	cuadrados[i].addEventListener("click", function(){
		let clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "¡Correcto!";
			resetButton.textContent = "Jugar de nuevo?";
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
		}else{
			messageDisplay.textContent = "Intentalo nuevamente!";
			this.style.backgroundColor = "black";
		}
	});
}

function randomColor(){
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	return "rgb("+red+", "+green+", "+blue+")";
}

function generateRandomColors(num){
	let arr = [];
	for(let i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for(let i = 0; i < cuadrados.length; i++){
		cuadrados[i].style.backgroundColor = colors[i];
	}
	resetButton.textContent = "Nuevos colores";
	h1.style.backgroundColor = "rgb(12, 12, 12)";
});

hardButton.addEventListener("click", function(){
	numSquares = 6;
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	messageDisplay.textContent = "";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i = 0; i < cuadrados.length; i++){
		cuadrados[i].style.backgroundColor = colors[i];
		cuadrados[i].style.display = "block";
	}
});

easyButton.addEventListener("click", function(){
	numSquares = 3;
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	messageDisplay.textContent = "";
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i = 0; i < cuadrados.length; i++){
		if(colors[i]){
			cuadrados[i].style.backgroundColor = colors[i];
		}else{
			cuadrados[i].style.display = "none";
		}
	}

});

function changeColors(color){
	for(let i = 0; i < cuadrados.length; i++){
		cuadrados[i].style.backgroundColor = color;
	}
}

function pickColor(){
	let rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}







