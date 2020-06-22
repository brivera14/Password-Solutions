// Assignment code here

// Created function that allows to ask for the length that user desires.
var length = function() {
  var pwlength = Number(prompt("How many characters would you like your password to be?"));
  // set the loop that allows to restrict the lengh range requested by the client.
  while (isNaN(pwlength) || pwlength < 8 || pwlength > 128){
    alert("The length of your password must be between 8 - 128 characters.")
    return length();
  }
return pwlength;
}

// stablished function that allows to ask the criteria that user desires like uppercase, lowercase, numbers and special characters.
var getCharChoice = function() {
  // variable that storaga the user requests
  var charchoice = "";
  // uppercase request
  var confirmUpperCase = confirm("Would you like to use uppercase letters?");
  if (confirmUpperCase) {
    charchoice += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  // lowercase request
  var confirmLowerCase = confirm("Would you like to use lowercase letters?");
  if (confirmLowerCase) { 
    charchoice += 'abcdefghijklmnopqrstuvwxyz';
  }
  // number request
  var confirmNumbers = confirm("Would you like to use numbers?");
  if (confirmNumbers) {
    charchoice += '0123456789';
  }
  // special characters request
  var confirmSymbols = confirm("Would you like to use special characters?");
  if (confirmSymbols) {
    charchoice += '!@#$%^&*=-_|';
  }
  // force the user to validate at least one option of the criterias.
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSymbols){
    alert("You must select at least one character type!");
    return getCharChoice();
  }
return charchoice;
}

// Initialized the process of generating the password.
function generatePassword() {
  // Start giving to password a value of 0.
  var password = "";
  // Call to action Length function.
  pwlength = length();
  // Call to action Charchoice function.
  charchoice = getCharChoice();
  // Create for loop to generate random password according to the specifications.
  for (var i = password.length; i < pwlength; i++) password += charchoice[Math.floor(Math.random() * charchoice.length)];
  // Stop the function and give the result
  return password;
}

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