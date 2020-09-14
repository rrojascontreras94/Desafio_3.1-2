function addNumber(number){
	var display = document.getElementById("resultado");
	var lastElement = display.innerText.split("").pop();
	var elementsArray = display.innerText.split("");
	/* agrega numero si el ultimo elemento o el caracter entrente son numerico
	sino reemplaza la ultima operacion*/
	if ((isElementNumber(lastElement) || isElementNumber(number))) {
		display.innerHTML += number;
	}
	else{
		replaceLastElement(display, number);
	}
}

function clearDisplay(){
	var display = document.getElementById("resultado");
	display.innerHTML = "";
}

function result(){
	var expression = document.getElementById("resultado").innerText;
	var result = eval(expression);
	document.getElementById("resultado").innerHTML = result;
}

function isElementNumber(element){
	var parseElement = parseInt(element);
	if ((typeof(parseElement)=="number" && !isNaN(parseElement)) || element == undefined) {
		return true;
	}
	else{
		return false;
	}
}

function replaceLastElement(display, number){
	var lastIndex = elementsArray.length - 1;
	elementsArray[lastIndex] = number;
	display.innerText = elementsArray.join("");
}






function init(){

}
