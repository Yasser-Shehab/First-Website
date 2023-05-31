const email = document.getElementById("email")//assigning ids to easier names
const fname = document.getElementById("fname")
const Last = document.getElementById("lname")

function emailv(){
	if (email.value ==""){//checks if the line is empty
		document.getElementById("message1").innerHTML = "Please Type Your Email";
		return false
	}
	
	else {
		document.getElementById("message1").innerHTML = "Accepted";
		return false
	}
}
function FnameV(){
	if (fname.value ==""){
		document.getElementById("message2").innerHTML = "Please Type Your First Name";
		return false
	}
	
	else {
		document.getElementById("message2").innerHTML = "Accepted";
		return false
	}
}
function ln(){
	if (Last.value ==""){
		document.getElementById("message3").innerHTML = "Please Type Your Last name";
		return false
	}
	
	else {
		document.getElementById("message3").innerHTML = "Accepted";
		return false
	}
}