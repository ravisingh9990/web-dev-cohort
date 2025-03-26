const inputText = document.getElementById('inputText');
const checkButton = document.getElementById('checkButton');
const resultMessage = document.getElementById('resultMessage');

checkButton.addEventListener('click', checkPalindrome); 

function checkPalindrome(){
   const text = inputText.value.toLowerCase().replace(/[^a-z0-9]/g, "");
   const reverseText = text.split("").reverse().join("");

   if(text === reverseText){
    resultMessage.textContent = `${inputText.value} is a palindrome`;
    resultMessage.style.color = "green";
   }else{
    resultMessage.textContent = `${inputText.value} is Not a palindrome`;
    resultMessage.style.color = "red";
   }
}