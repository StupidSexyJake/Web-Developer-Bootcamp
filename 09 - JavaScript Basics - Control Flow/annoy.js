var answer = prompt("Are we there yet?");

while (!(answer.includes("yes"))) {
	var answer = prompt("Are we there yet?");
}

alert("Yay, we made it!");