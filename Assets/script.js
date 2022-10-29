// Assignment Code
var generateBtn = document.querySelector("#generate");
// var incLC = false;
// var incUC = false;
// var incNum = false;
// var incSpec = false;
function generatePassword() {
  //Defines default variables that will be changed within the scope of the program.
  var LC = 'N';
  var UC = 'N';
  var num = 'N';
  var spec = 'N';
  var genPassword = "";
  var charList = "";
  var passwordLength = window.prompt("Choose a password length between 8 and 128 characters.");
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = window.prompt("Please choose a valid password length between 8 and 128 characters")
  }
  while (LC == "N" && UC == "N" && num == "N" && spec == "N") {
    //Check for lowercase
    LC = window.prompt("Do you want to include lowercase letters? (Y or N)");
    while (LC != "Y" && LC !="N") {
      LC = window.prompt("Please answer a valid response.  Do you want to include lowercase letters? (Y or N)");
    }
    //Check for uppercase
    UC  = window.prompt("Do you want to include uppercase letters? (Y or N)");
    while (UC != "Y" && UC !="N") {
      UC = window.prompt("Please answer a valid response.  Do you want to include uppercase letters? (Y or N)");
    }
    //Check for numeric values
    num = window.prompt("Do you want to include numeric characters? (Y or N)");
    while (num != "Y" && num !="N") {
      num = window.prompt("Please answer a valid response.  Do you want to include numeric characters? (Y or N)");
    }
    //Check for special characters
    spec = window.prompt("Do you want to include special characters? (Y or N)");
    while (spec != "Y" && spec !="N") {
      spec = window.prompt("Please answer a valid response.  Do you want to include special characters? (Y or N)");
    }
    //Check if nothing is selected
    if (LC == "N" && UC == "N" && num == "N" && spec == "N") {
      window.alert("Please select at least one character type to include in the password.") 
    }
  }
  //This section adds the appropriate characters to the list of potential characters to be used in the generated password
  if (LC == "Y") {
    charList = charList.concat("abcdefghijklmnopqrstuvwxyz");
  }
  if (UC == "Y") {
    charList = charList.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (num == "Y") {
    charList = charList.concat("1234567890");
  }
  if (spec == "Y") {
    charList = charList.concat("' !\"#$%&'()*+,-./:;<=>?@[]\\^_`{|}~");
  }
  // The created string of all the potential characters to be used in the password is used to generate a random password of specific length. 
  for (var i = 0; i < passwordLength; i++) {
    genPassword = genPassword.concat(charList[Math.floor(Math.random() * charList.length)]); 
  }
  return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);