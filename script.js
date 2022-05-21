
	

function showHome(){
	document.getElementById("login").style.display = 'none';
	document.getElementById("signup").style.display = 'none';
};

function showLogin(){
	document.getElementById("login").style.display = 'flex';
	document.getElementById("signup").style.display = 'none';
};

function showSignup(){
	document.getElementById("login").style.display = 'none';
	document.getElementById("signup").style.display = 'flex';
};

function validateForm(){
	console.log('hi')

	var userNameError = document.getElementById("userNameError");
	var userName = document.getElementById("customerUserName");
	var nameError = document.getElementById("nameError");
	var name = document.getElementById("customerName");
	var emailError = document.getElementById("emailError");
	var email = document.getElementById("customerEmail");
	var numberError = document.getElementById("numberError");
	var number = document.getElementById("customerNumber");
	var passwordError = document.getElementById("passwordError");
	var password = document.getElementById("customerPassword");
	var confirmPasswordError = document.getElementById("confirmPasswordError");
	var confirmPassword = document.getElementById("customerConfirmPassword");


	if ( userName.value == "" ) {
		userNameError.innerHTML = "Please enter your fullname";
		userName.style.borderColor = 'red';
	} else {
		userNameError.innerHTML = "";
		userName.style.borderColor = 'black';
	};
		if ( name.value == "" ) {
		nameError.innerHTML = "Please enter your fullname";
		name.style.borderColor = 'red';
	} else {
		nameError.innerHTML = "";
		name.style.borderColor = 'black';
	};

	if ( email.value == "" ) {
		emailError.innerHTML = "Please enter an email";
		email.style.borderColor = 'red';
	} else {
		emailError.innerHTML = "";
		email.style.borderColor = 'black';
	};

	//if ( email.value !== "@" ) {
	//	emailError.innerHTML = "Please enter a valid email"
	//} else {
	//	emailError.innerHTML = ""
	//};

	if ( number.value == "" ) {
		numberError.innerHTML = "Please enter your phone number";
		number.style.borderColor = 'red';
	} else {
		numberError.innerHTML = "";
		number.style.borderColor = 'black';
	}

	if ( password.value == "" ) {
		passwordError.innerHTML = "Please enter a password";
		password.style.borderColor = 'red';
	} else {
		passwordError.innerHTML = "";
		password.style.borderColor = 'black';
	}

	if ( confirmPassword.value == "" ) {
		confirmPasswordError.innerHTML = "Please enter to confirm password";
		confirmPassword.style.borderColor = 'red';
	} else {
		confirmPasswordError.innerHTML = "";
		confirmPassword.style.borderColor = 'black';
	}
}

function validateLoginForm() {
	var emailError = document.getElementById("loginEmailError");
	var email = document.getElementById("customerLoginEmail");
	var passwordError = document.getElementById("loginPasswordError");
	var password = document.getElementById("customerLoginPassword");

		if ( email.value == "" ) {
		emailError.innerHTML = "Please enter your email";
		email.style.borderColor = 'red';
	} else {
		emailError.innerHTML = "";
		email.style.borderColor = 'black';
	};

	if ( password.value == "" ) {
		passwordError.innerHTML = "Please enter your password";
		password.style.borderColor = 'red';
	} else {
		passwordError.innerHTML = "";
		password.style.borderColor = 'black';
	}
}
