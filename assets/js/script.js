var pwLength = prompt(
  "Please pick a number between 8 and 128 for password length."
);
var pwLower = confirm("Do you want to add lower case characters?");
var pwUpper = confirm("Do you want to add upper case characters?");
var pwNum = confirm("Do you want to add numeric characters?");
var pwSpecial = confirm("Do you want to add special characters?");
var random = {
  lower: generateLower,
  upper: generateUpper,
  special: generateSpecial,
  number: generateNum,
};
function generateLower() {
  var lowerOptions = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var lowerRandom = Math.floor(Math.random() * lowerOptions.length);
  return lowerOptions[lowerRandom];
}
function generateUpper() {
  var upperOptions = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var upperRandom = Math.floor(Math.random() * upperOptions.length);
  return upperOptions[upperRandom];
}
function generateNum() {
  var numOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var numRandom = Math.floor(Math.random() * numOptions.length);
  return numOptions[numRandom];
}
function generateSpecial() {
  var specialOptions = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var specialRandom = Math.floor(Math.random() * specialOptions.length);
  return specialOptions[specialRandom];
}
function countVer(pwLength) {
  if (pwLength >= 8 && pwLength <= 128) {
    return true;
  } else {
    return false;
  }
}
console.log(generateLower());
console.log(generateUpper());
console.log(generateNum());
console.log(generateSpecial());


//if users select boolean value of true then lowerOptions are included in the password
//conditionals for For loop

// i need to store all of this in an array and generate a password after that

//Driver function. Check each condition, generate some sort of for loop,

function generatePassword() {var password = ""
for (var i=0; i < pwLength; i ++) {

if (pwLower) {
    var password = password + random.lower();
    
  } 
  else (pwUpper)
    var password = password + random.upper()
        
    if (pwNum)
      var password = password + random.number ()
  
             else (pwSpecial) 
          var password = password + random.special ()
  
  }console.log(password)
}
console.log(generatePassword)


// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//create generate password function
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Prompt w/ validation to see how many characters they want (length of password) between 8 and 128 characters
// Confirm - ask if they want special characters in the password
// Confirm - uppercase
//Confirm - lowercase
//Confirm numeric
// Validate that at least 1 of the 4 options for speical characters/etc is true
// If false alert saying they need to pick one of these, then re-ask those 4 questions
// If they pick one of them (1/4 = true) then generate password
//Generate promps that pop up where you can type in how many characters you want to put in, do you want to include special characters? numberic characters? uppercase? how long? how long would be a promp, the others would be confirm
//use that input from the user to create the password.
//Use pseudocode - explain step by step in regular language so you can follow progress.
//prompt user for length
//promt user for all character selections to confirm all
//error handling (did they enter a valid number)
//error handling (did user select at least one option)
//use inputs to generate password
//return the password from the generate password function in either an alert or display in text box
//you can leave the pseudo-code comments and write the particular thing underneath them so you know where you are and what each one does
//gives you a path to follow to get to the end
//use Math.floor() and Math.random() to generate random number