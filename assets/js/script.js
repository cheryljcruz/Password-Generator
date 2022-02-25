// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var numberChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = "";


function generatePassword() {

  //prompt user for password length
  var passwordLength = window.prompt("How many characters would you like in your password? Choose between 8 and 128.");
  if (passwordLength <= 8 || passwordLength >= 128) {
    window.alert("You need to choose a password length between 8 and 128. Try again!");
    return generatePassword();

  }
 
  //user criteria confirmations

  var numberCharConfirm = window.confirm("Want to add Numbers?");
  var specialCharConfirm = window.confirm("Want to add Special characters?");
  var lowerCharConfirm = window.confirm("Want to add Lowercase characters?");
  var upperCharConfirm = window.confirm("Want to add Uppercase characters?");


  // 1. prompt user for the password criteria
  //  a. password length 8 < 128
  //  b. lowercase, uppercase, numeric, and/or special characters
  // 2. validate the input
  // 3. generate password based on criteria
  
  
  // 4. Display password to the page
    return "Password goes here!";
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
