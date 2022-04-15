var choices = ["rock", "paper", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;
function score(){
	var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}
setInterval(score, 50);
function convert(word){
	if(word === "rock") {
		return '<i class="far fa-hand-rock"></i>'
	}
	if(word === "paper") {
		return '<i class="far fa-hand-paper"></i>'
	}
	else
	return '<i class="far fa-hand-scissors"></i>'
}
function game(UserChoice){
	var box = document.getElementById("challenge");
	box.style.display = "flex";
	var userDiv = document.getElementById("YourObject");
	userDiv.innerHTML = convert(UserChoice);
	var comDiv = document.getElementById("ComObject");
	comDiv.innerHTML = convert(ComChoice);
	if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper"){
		win(UserChoice);
	}
	else if(UserChoice === ComChoice){
		draw(UserChoice);
	}
	else{
		lose(UserChoice);
	}
	
}
function win(bn){
    document.getElementById("who").innerHTML = "You win!";
    
}
function draw(bn){
	document.getElementById("who").innerHTML = "It's a Draw.";
	
}
function lose(bn){
	document.getElementById("who").innerHTML = "You lose...";
	
}