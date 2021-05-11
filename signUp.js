 let myInput = document.getElementById("psw");
 let letter = document.getElementById("letter");
 let capital = document.getElementById("capital");
 let number = document.getElementById("number");
 let length = document.grtElementById("length");

 myInput.onfocus = function() {
 	document.getElementById("message");
 }

 myInput.onblur = function() {
 	document.getElementById("message");
 }

 //when a user starts to type something
 myInput.onkeyup = function() {
 	let lowerCaseLetters = /[a-z]/g;
 	if (myInput.value.match(lowerCaseLetters)) {
 		letter.classList.remove("invalid");
 		letter.classList.add("valid");
 	}
 	else {
 		letter.classList.remove("valid");
 		letter.classList.add("invalid");
 	}

 	//capital letter validation
 	let upperCaseLetters = /[A-Z]/g;
 	if (myInput.value.match(upperCaseLetters)) {
 		letter.classList.remove("invalid");
 		letter.classList.add("valid");
 	}
 	else {
 		letter.classList.remove("valid");
 		letter.classList.add("invalid");
 	}

 	//number validation
 	let numbers = /[0-9]/g;
 	if (myInput.value.match(numbers)) {
 		number.classList.remove("invalid");
 		number.classList.add("valid");
 	}
 	else {
 		number.classList.remove("valid");
 		number.classList.add("invalid");
 	}

 	//length validation
 	if (myInput.value.length >= 8) {
 		length.classList.remove("invalid");
 		length.classList.add("valid");
 	}
 	else {
 		length.classList.remove("valid");
 		length.classList.add("invalid");
 	}
 }