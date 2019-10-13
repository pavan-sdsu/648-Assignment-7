function main() {
	var userChoice = prompt("Enter rock, paper or scissors.");
	if (!(userChoice == "rock" || userChoice == "paper" || userChoice == "scissors")) {
		alert("Incorrect choice! Please select from given options only.")
		return main();
	}

	var computerChoice = Math.round(Math.random() * 100);
	computerChoice = (computerChoice <= 33) ? "rock" : ((computerChoice >= 67) ? "scissors" : "paper");

	var str = "You choose " + userChoice + ", computer chose " + computerChoice + ". ";
	var win = "You win.";
	var lose = "You lose."

	if (computerChoice == userChoice) {
		return alert(str + "It's a tie.")
	}

	if (computerChoice == "rock") {
		(userChoice == "paper") ? alert(str + win) : alert(str + lose);
	}

	if (computerChoice == "paper") {
		(userChoice == "rock") ? alert(str + lose) : alert(str + win);		
	}

	if (computerChoice == "scissors") {
		(userChoice == "rock") ? alert(str + win) : alert(str + lose);		
	}

}

main();