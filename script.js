// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword (){

  //define variables for password criteria
  
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var special = "!@#$%^&*()_+-=[]{}\\|;:'\",<.>/?~`"

// Define variable to store generated password 
  var password = "";
// ask user for desired password length 
  var passwordLength = prompt("how many characters would you like your password to be ?");

  // Validate user input 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }
// ask user  for passwprd criteria 
  var useLowercase = confirm("do you want to include lowercase letters?");
  var useUppercase = confirm("do you want to include uppercase letters?");
  var useNumbers = confirm("Do you want to include numbers?");
  var useSymbols = confirm("Do you want to include symbols?");

  //Validate user iput 
  if (!useLowercase && !useUppercase && !useNumbers && !useSymbols) {
    alert("You must select at least one character type.");
    return;
  }

  //Generate password base on user criteria
  for (var i = 0; i < passwordLength; i++) {
    var characterType = Math.floor(Math.random() * 4);

    if (characterType === 0 && useLowercase) {
      password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    } else if (characterType === 1 && useUppercase) {
      password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    } else if (characterType === 2 && useNumbers) {
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    } else if (characterType === 3 && useSymbols) {
      password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    } else {
      i--;
    }
  }

  return password;

 }

 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

    
  
  




