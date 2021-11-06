var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // This function allows for the generation of the password
  function generatePassword() {
    alert("Please generate a password between 8 and 128 characters.");

    var password = {
      numbers: confirm("Would you like to include numbers?"),
      upperCase: confirm("Would you like to include uppercase letters?"),
      lowerCase: confirm("Would you like to include lowercase letters?"),
      special: confirm("Would you like to include special letters?"),
      length: acceptableLimit(
        parseInt(
          prompt("Choose a character count between 8 and 127 characters.")
        )
      ),
    };
//if logic loop to prevent the user from making a selection outside the proper range
    function acceptableLimit(num) {
      if (7 < num && num < 128) {
        return num;
      } else {
        alert("Make a vaid selection.");
      }
    }

    if (
      password.numbers === false &&
      password.upperCase === false &&
      password.lowerCase === false &&
      password.special === false
    ) {
      alert("Please choose at least one character set.");
    }

    // output to the user so they know what their password contains
    console.log("Numbers: " + password.numbers);
    console.log("Upper Case Letters: " + password.upperCase);
    console.log("Lower Case Letters: " + password.lowerCase);
    console.log("Special Characters: " + password.special);
    console.log(
      "Your password is " + password.length + " characters in length"
    );

   //These are the arrays for the building of the password
    var numbers = "1,2,3,4,5,6,7,8,9,0,";
    var upperC = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,";
    var lowerC = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,";
    var special = "!,@,#,$,%,^,&,*,(,),<,>,?,{,},],[,:,;,";

    let charSet = "";




    if (password.numbers === true) {
      charSet = charSet + numbers;
    }

    if (password.upperCase === true) {
      charSet = charSet + upperC;
    }

    if (password.lowerCase === true) {
      charSet = charSet + lowerC;
    }

    if (password.special === true) {
      charSet = charSet + special;
    }




    
    console.log(charSet);

    // split string to select each piece of the array that is selected
    finalCharset = charSet.split(",").filter((item) => item);

    console.log(finalCharset);

        let generatedPassword = "";
    for (let i = 0; i < password.length; i++) {
      getPass = Math.floor(Math.random() * finalCharset.length);
      generatedPassword += finalCharset[getPass];
    }

    password = generatedPassword;
    // return final password
    return password;
  }
}

// generates the button
generateBtn.addEventListener("click", writePassword);