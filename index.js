const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"
    ,"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g"
    ,"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
    "y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":"
    ,";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("first-Password")
let secondPasswordEl = document.getElementById("second-Password")
let generatePasswordBtn = document.getElementById("generatePassword")

function generateRandomPassword(passwordLength)
{
    let password = "";
    for(let i = 0; i<passwordLength; i++)
    {
        let randomNumber = Math.floor(Math.random() * characters.length)
        password += characters[randomNumber]
    }
    return password
}



generatePasswordBtn.addEventListener("click", function() {

    let firstPassword = generateRandomPassword(15);
    let secondPassword = generateRandomPassword(15);
    firstPasswordEl.textContent = firstPassword
    secondPasswordEl.textContent = secondPassword
})
