var age = prompt("How old are you?");
if (age < 0) { alert("Please enter a valid age"); }
if (age == 21) { alert("Happy 21st Birthday!"); }
if (age % 2 === 1) { alert("Your age is odd!"); }
if (Math.sqrt(age) % 1 === 0) { alert("Your age is a perfect square!"); }