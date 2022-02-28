// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var charSet = {
  numberChar:  "0123456789",
  specialChar: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ",
  lowerChar:  "abcdefghijklmnopqrstuvwxyz",
  upperChar:  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  };

function generatePassword() {
  
  //prompt user for password length
  var passwordLength = window.prompt("How many characters would you like in your password? Choose between 8 and 128.");
  while (passwordLength <= 8 || passwordLength >= 128) {
    window.alert("You need to choose a password length between 8 and 128. Try again!");
    return generatePassword();

  }
 
  //user criteria confirmations
  var numberCharConfirm = window.confirm("Want to include Numbers?");
  var specialCharConfirm = window.confirm("Want to include Special characters?");
  var lowerCharConfirm = window.confirm("Want to include Lowercase characters?");
  var upperCharConfirm = window.confirm("Want to include Uppercase characters?");

  // select atleast one character type
 while(!numberCharConfirm && !specialCharConfirm && !lowerCharConfirm && !upperCharConfirm) {
   alert("Select at least one character to move on!");
  var numberCharConfirm = window.confirm("Want to include Numbers?");
  var specialCharConfirm = window.confirm("Want to include Special characters?");
  var lowerCharConfirm = window.confirm("Want to include Lowercase characters?");
  var upperCharConfirm = window.confirm("Want to include Uppercase characters?");
  }


  
    return "";
  }
console.log(generatePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
