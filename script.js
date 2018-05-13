var countErr = 0; 
document.querySelector('.btn-submit').addEventListener('click', function(e) {
	e.preventDefault();
  countErr = 0;
  checkRequired();
  checkText();
  checkDate();
  checkEmail();
  checkPassword();
  //console.log(countErr);
  if (countErr === 0) {
  	//document.getElementsByTagName('form')[0].submit();
		var modal = document.querySelector('#modalPass');
		var span = document.querySelector(".close");
		modal.style.display = "block";
		span.onclick = function() {
		  modal.style.display = "none";
		}
		window.onclick = function(event) {
	    if (event.target == modal) {
	      modal.style.display = "none";
	    }
		}
  	window.scrollTo(0,0);
  } else {
  	window.scrollTo(0,0);
  }
});

function checkRequired() {
	let inputs = document.querySelectorAll('.input');
	//console.log("inputs");
	//console.log(inputs);
  let inputsRadio = document.querySelectorAll('input[type="radio"]');
  //console.log("inputsRadio");
	//console.log(inputsRadio);
  inputs.forEach(function(input) {
  	//console.log(input.value);
  	if (input.value === "" || input === undefined) {
  		countErr++;
  		input.style.borderColor = "red";
			switch (input.id) {
				case "firstName": {
					document.querySelector(".firstNameError").style.display = "block";
					document.querySelector(".firstNameError").innerHTML = "Check your first name. It is required field.";
					break;
				}
				case "lastName": {
					document.querySelector(".lastNameError").style.display = "block";
					document.querySelector(".lastNameError").innerHTML = "Check your last name. It is required field.";
					break;
				}
				case "bday": {
					document.querySelector(".bdayError").style.display="block";
					document.querySelector(".bdayError").innerHTML = "Check your birthday. It is required field.";
					break;
				}
				case "country": {
					document.querySelector(".countryError").style.display = "block";
					document.querySelector(".countryError").innerHTML = "Check your country. It is required field.";
					break;
				}
				case "email": {
					document.querySelector(".emailError").style.display = "block";
					document.querySelector(".emailError").innerHTML = "Check your email. It is required field.";
					break;
				}
				case "password": {
					document.querySelector(".passwordError").style.display = "block";
					document.querySelector(".passwordError").innerHTML = "Check your password. It is required field.";
					break;
				}
				case "address": {
					document.querySelector(".addressError").style.display = "block";
					document.querySelector(".addressError").innerHTML = "Check your address. It is required field.";
					break;
				}
				case "notes": {
					document.querySelector(".notesError").style.display = "block";
					document.querySelector(".notesError").innerHTML = "Check your notes. It is required field.";
					break;
				}
				default: {
					break;
				}
			}
  	} else {
  		input.style.borderColor = "#ccc";
  		switch (input.id) {
				case "firstName": {
					document.querySelector(".firstNameError").style.display = "none";
					break;
				}
				case "lastName": {
					document.querySelector(".lastNameError").style.display = "none";
					break;
				}
				case "bday": {
					document.querySelector(".bdayError").style.display = "none";
					break;
				}
				case "country": {
					document.querySelector(".countryError").style.display = "none";
					break;
				}
				case "email": {
					document.querySelector(".emailError").style.display = "none";
					break;
				}
				case "password": {
					document.querySelector(".passwordError").style.display = "none";
					break;
				}
				case "address": {
					document.querySelector(".addressError").style.display = "none";
					break;
				}
				case "notes": {
					document.querySelector(".notesError").style.display = "none";
					break;
				}
				default: {
					break;
				}
			}
  	}
  });
  let flag = false;
	for (let i = 0; i < inputsRadio.length; i++) {
		//console.log(inputsRadio[i].value);
		if (inputsRadio[i].checked === true) {
			flag = true;
			break;
		} else {
			continue;
		}
	}
	if (flag === false) {
		countErr++;
		document.querySelector(".sexError").style.display = "block";
		document.querySelector(".sexError").innerHTML = "Check your sex. It is required field.";
	} else {
		document.querySelector(".sexError").style.display = "none";
	}
}

function checkText() {
	var reg = /['"]+/;
	var textFields = document.querySelectorAll("#firstName, #lastName, #address, #notes");
	//console.log("textFields");
	//console.log(textFields);
  textFields.forEach(function(textField) {
  	//console.log(textField.value);
  	if (textField.value !== "") {
  		let resCheck = reg.test(textField.value);
  		if (resCheck) {
  			countErr++;
  			textField.style.borderColor = "red";
  			textField.style.display = "block";
  			switch (textField.id) {
  				case "firstName": {
  					document.querySelector(".firstNameError").style.display = "block";
  					document.querySelector(".firstNameError").innerHTML = "Check your first name. It should not contain ' or \".";
  					break;
  				}
  				case "lastName": {
  					document.querySelector(".lastNameError").style.display = "block";
  					document.querySelector(".lastNameError").innerHTML = "Check your last name. It should not contain ' or \".";
  					break;
  				}
  				case "address": {
  					document.querySelector(".addressError").style.display = "block";
  					document.querySelector(".addressError").innerHTML = "Check your address. It should not contain ' or \".";
  					break;
  				}
  				case "notes": {
  					document.querySelector(".notesError").style.display = "block";
  					document.querySelector(".notesError").innerHTML = "Check your notes. It should not contain ' or \".";
  					break;
  				}
  				default: {
  					break;
  				}
  			}
  		} else {
  			textField.style.borderColor = "#ccc";
  			switch (textField.id) {
  				case "firstName": {
  					document.querySelector(".firstNameError").style.display = "none";
  					break;
  				}
  				case "lastName": {
  					document.querySelector(".lastNameError").style.display = "none";
  					break;
  				}
  				case "address": {
  					document.querySelector(".addressError").style.display = "none";
  					break;
  				}
  				case "notes": {
  					document.querySelector(".notesError").style.display = "none";
  					break;
  				}
  				default: {
  					break;
  				}
  			}
  		}
  	}
  });
}

function checkDate() {
	let date = document.querySelector('input[type="date"]').value.split("-");
	let year = parseInt(date[0]);
	let month = parseInt(date[1]);
	let day = parseInt(date[2]);
	let dateToday = new Date();
	if (year < 1900 || year > dateToday.getFullYear()) {
		countErr++;
		document.querySelector('input[type="date"]').style.borderColor = "red";
		document.querySelector(".bdayError").style.display = "block";
		document.querySelector(".bdayError").innerHTML = "Check your birthday. Year cannot be bigger than those we have now.";
	} else if (month > dateToday.getMonth() + 1 && year === dateToday.getFullYear()) {
		countErr++;
		document.querySelector('input[type="date"]').style.borderColor = "red";
		document.querySelector(".bdayError").style.display = "block";
		document.querySelector(".bdayError").innerHTML = "Check your birthday. Month cannot be bigger than those we have now.";
	} else if (day > dateToday.getDate() && year === dateToday.getFullYear() && month === dateToday.getMonth() + 1) {
		countErr++;
		document.querySelector('input[type="date"]').style.borderColor = "red";
		document.querySelector(".bdayError").style.display = "block";
		document.querySelector(".bdayError").innerHTML = "Check your birthday. Day cannot be bigger than those we have now.";
	}
}

function checkEmail() {
  let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
  if (!re.test(document.querySelector("#email").value) && document.querySelector("#email").value !== "") {
  	countErr++;
  	document.querySelector("#email").style.borderColor = "red";
  	document.querySelector(".emailError").style.display = "block";
		document.querySelector(".emailError").innerHTML = "Check your email. It should be correct email.";
	}
}

function checkPassword() {
	let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,32}/;
	if (!re.test(document.querySelector("#password").value) && document.querySelector("#password").value !== "") {
  	countErr++;
  	document.querySelector("#password").style.borderColor = "red";
  	document.querySelector(".passwordError").style.display = "block";
		document.querySelector(".passwordError").innerHTML = "Check your password. It should meet requirements.";
	}
}
