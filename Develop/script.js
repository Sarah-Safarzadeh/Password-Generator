/* Password Generator will generate and display a randomized password adhering to criteria seclected by the user. */


//Assignment code here
  // Password Length Prompt
window.prompt("Please enter desired password length (must be between 8 - 128 characters).");
  // Password Character Type Alerts
window.confirm("Would you like your password to include lowercase letters? If yes, please select 'ok.' If not, please select 'cancel'");
window.confirm("How do you feel about uppercase letters? If you'd like them in your password, please select 'ok.' If not, please select 'cancel.'");
window.confirm("Do you find passwords with numbers to be more agreeable? To include numbers in your password, please select 'ok.' if not, please select 'cancel.'");
window.confirm("Would you like your password to be as special as you are? To add special characters, please select 'ok.' if not, please select 'cancel.'");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
