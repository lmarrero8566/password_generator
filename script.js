// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var newPassword = [];
  var possibleCharacters = [];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
  var Symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];

  var length = prompt('How many characters would you like?');

  if(length < 8){
    alert("Password needs to be 8 characters or more");

    return "";
  }

  var lowerCaseQuestion = confirm('lowercase characters?');
  var upperCaseQuestion = confirm('uppercase characters?');
  var numberQuestion = confirm('Do you want a number?');
  var SymbolsQuestion = confirm('Do you want to add a symbol?');
  
  if (lowerCaseQuestion) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
  }
  if (upperCaseQuestion) {
    possibleCharacters = possibleCharacters.concat(upperCase);
  }

  if (numberQuestion) {
    possibleCharacters = possibleCharacters.concat(Numbers);
  }

  if (SymbolsQuestion) {
    possibleCharacters = possibleCharacters.concat(Symbols);
  }

   // for loop to the length of that varible
   for (var i = 0; i < length; i++) {

    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    newPassword.push(possibleCharacters[randomIndex]);
  }
  

  return newPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
