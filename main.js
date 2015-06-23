var getPhone = function(){
	var phone = prompt('Enter your phone number with dashes')
	if (phone.charAt(3) && phone.charAt(7) === '-' && phone.length === 12){
		return true
	}
	else {
		getPhone()
	}
}
var truePhone = getPhone()
	if (truePhone) {
		alert(true)
	}


var getBirth = function(){
	var birth = prompt("Date of birth: xx/xx/xx ")
	if (birth.charAt(2) && birth.charAt(5) === "/"){
		return true
	}
	else {
		getBirth()
	}
}
var trueBirth = getBirth()
	if (trueBirth) {
		alert(true)
	}

var getPostal = function(){
	var postal = prompt("Postal Code: xxxxx or xxxxx-xxxx")
	if (postal.length === 5 || postal.length === 10 && postal.charAt(5) === '-'){
		return true
	}
	else {
		getPostal()
	}
}
var truePostal = getPostal()
	if (truePostal) {
		alert(true)
	}

var getState = function(){
	var state = prompt("Enter State: ").toUpperCase()
	if (state.length === 2) {
		return true
	} 
	else {
		getState()
	}
}
var trueState = getState()
	if (trueState) {
		alert(true)
	}


var getMarried = function(){
	var married = prompt("Are you married? ")
	if (married === "yes" || married === "no") {
		return true
	}
	else {
		getMarried()
	}
}
var trueMarried = getMarried()
	if (trueMarried) {
		alert(true)
	}


