// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var incLC = true;
var incUC = true;
var incNum = true;
var incSpec = true;

function generatePassword() {
  passwordLength = window.prompt("Choose a password length between 8 and 128 characters.");
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = window.prompt("Please choose a valid password length between 8 and 128 characters")
  }
  var LC = window.prompt("Do you want to include lowercase letters? (Y or N)");
  while (LC != "Y" && LC !="N") {
    LC = window.prompt("Please answer a valid response.  Do you want to include lowercase letters? (Y or N)");
  }
  if (LC === "Y") {
    incLC = true;
  } else if (LC == "N") {
    incLC = false;
  }
  var UC  = window.prompt("Do you want to include uppercase letters? (Y or N)");
  while (UC != "Y" && UC !="N") {
    UC = window.prompt("Please answer a valid response.  Do you want to include uppercase letters? (Y or N)");
  }
  if (UC === "Y") {
    incUC = true;
  } else if (UC == "N") {
    incUC = false;
  }
  var num = window.prompt("Do you want to include numeric characters? (Y or N)");
  while (num != "Y" && num !="N") {
    num = window.prompt("Please answer a valid response.  Do you want to include numeric characters? (Y or N)");
  }
  if (num === "Y") {
    incNum = true;
  } else if (num == "N") {
    incNum = false;
  }
  var spec = window.prompt("Do you want to include special characters? (Y or N)");
  while (spec != "Y" && spec !="N") {
    LC = window.prompt("Please answer a valid response.  Do you want to include special characters? (Y or N)");
  }
  if (spec === "Y") {
    incSpec = true;
  } else if (LC == "N") {
    incSpec = false;
  }

  return "generated password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();
window.alert(passwordLength);
window.alert(incLC);
window.alert(incUC);
window.alert(incNum);
window.alert(incSpec);