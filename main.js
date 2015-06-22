var user = prompt("Enter your phone number with dashes: ");

alert(user.charAt(3) && user.charAt(7) === '-' && user.length === 12);

var birth = prompt("Date of birth: ")

alert(birth.charAt(2) && birth.charAt(5) === "/")

var postal = prompt("Postal Code: ")

alert(postal.length === 5)

var state = prompt("Enter State: ").toUpperCase()

alert(state.length === 2) 

var married = prompt("Are you married? ")

alert(married === "yes" || married === "no")