	var el = function(element) {
			return document.getElementById(element);
		}
		
		var isEmail = function(email) {
			var emailPattern = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
			if (emailPattern.test(email))
				return true;
			else
				return false;
		}
		
		var validateForm = function(e) {
			var isValid = true;
			if (!isEmail(el("email").value)) {
				el("emailError").innerHTML = " Invalid Email";
				isValid = false;
			}else{el("emailError").innerHTML = "";}
				
			
			if(el("fname").value == ""|| el(lname).value ==""){
				el("nameError").innerHTML = " Please enter your name";
				isValid = false;
			}else{el("nameError").innerHTML = "";}
			
			if(el("phoneNum").value ==""){
				el("phoneError").innerHTML = " Invalid Phone Number";
				isValid = false;
			}else{el("phoneError").innerHTML = "";}
			
			function validatePhoneNumber(elementValue){
			var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
			return phoneNumberPattern.test(el("phoneNum").value);
				}
			if(validatePhoneNumber(el("phoneNum").value) == false){
			el("phoneError").innerHTML = " Invalid Phone Number";
				isValid = false;
			}else{el("phoneError").innerHTML = "";}
			
		

			if(el("yes").checked ==false && el("no").checked ==false){
				el("returnError").innerHTML = " Required";
				isValid = false;
			}else{el("returnError").innerHTML = "";}
			
			if(el("yescls").checked ==false && el("nocls").checked ==false){
				el("clsError").innerHTML = " Required";
				isValid = false;
			}else{el("clsError").innerHTML ="";}
			
			if(el("reason").value ==""){
				el("reasonError").innerHTML =" Please type in reason for visit";
				isValid = false;
			}else{el("reasonError").innerHTML ="";}
			
			if(el("certify").checked ==false){
				el("agreeError").innerHTML = " Must Verify";
				isValid = false;
			}else{el("agreeError").innerHTML ="";}
			
			if (!isValid) {
				e.preventDefault();
			}
		}
		var clear = function() {	
			el("emailError").innerHTML = "";
			el("nameError").innerHTML = "*";
			
		}
		window.onload = function() {	
			el("sendForm").addEventListener("click", validateForm, false);
			el("reset").onclick = clear;
		}
		
