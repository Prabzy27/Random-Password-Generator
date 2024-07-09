const password_length = 10;
const lowercase = true;
const uppercase = true;
const i_number = true;
const symbols  = true;

function generate_password(length, lowercase, uppercase,  i_number, symbols  ){
const lowercasechar = "abcdefghijklmnopqrstuvwxyz";
const uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const i_numberchar = "1234567890";
const symbolschar = "!#$%^&*;";

let allowchar  = "";

allowchar +=  lowercase ?  lowercasechar: "";
allowchar +=  uppercase ?uppercasechar: "";
allowchar += i_number ? i_numberchar: "";
allowchar += symbols ? symbolschar : "";

let password = ""
if(length <=0){
    return  "The password must be at least one charcter long";
}

for(let i=0; i < length;  i++){
const randomIndex = Math.floor(Math.random() * allowchar.length);
password += allowchar[randomIndex];
}
return password;
}

 const password = generate_password( password_length,lowercase, uppercase,  i_number, symbols  )

console.log(`Your password is ${password}`);