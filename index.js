let inputOne = document.getElementById('input-one')
let inputTwo = document.getElementById('input-two')
let generateBtn = document.getElementById('generate-btn')
    generateBtn.disabled = true
let holder = document.getElementById('holder')
let inputNumber = document.getElementById('number')
let resetBtn = document.getElementById("reset-btn")
    resetBtn.disabled = true
let copyFirstPasswordBtn = document.getElementById('copy-first-password-btn')
let copySecondPasswordBtn = document.getElementById('copy-second-password-btn')


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomPasswordOne = ""
let randomPasswordTwo = ""

inputNumber.addEventListener('click', function() {
    generateBtn.disabled = false;
    resetBtn.disabled = false;
})

generateBtn.addEventListener('click', function generatePassword() {
    
    for (i = 0; i < inputNumber.value; i++) {
        randomIndex = Math.floor(Math.random() * characters.length)
        randomPasswordOne += characters[randomIndex]
    }
    inputOne.value = randomPasswordOne
    
   
    for (i = 0; i < inputNumber.value; i++) {
        randomIndex = Math.floor(Math.random() * characters.length)
        randomPasswordTwo += characters[randomIndex]
    }
    inputTwo.value = randomPasswordTwo
    }
    )

 resetBtn.addEventListener('click', function() {
    inputOne.value = ''
    inputTwo.value = ''
    document.getElementById('number').value = ''
 })


 copyFirstPasswordBtn.addEventListener('click', function() {
    inputOne.select();
    navigator.clipboard.writeText(inputOne.value);
}
)

copySecondPasswordBtn.addEventListener('click', function() {
    inputTwo.select();
    navigator.clipboard.writeText(inputTwo.value);
}
)

