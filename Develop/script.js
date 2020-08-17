/* Password Generator will generate and display a randomized password adhering to criteria seclected by the user. */


//Assignment code here
// Password Criteria
var pwLength
var abc = "abcdefghijklmnopqrstuvwxyz";
var ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var special = "!#$%&*+-=?@^_~"

var generatePassword = function () {

  // Password Length Prompt
  pwLength = parseInt(window.prompt("Please enter desired password length (must be between 8 - 128 characters)"));
  while (pwLength == "" || pwLength < 8 || pwLength > 128) {
    alert("Please follow the instructions. You got this!");
    pwLength();
  };

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
