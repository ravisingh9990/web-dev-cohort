const limit = 200;
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const warningMessage = document.getElementById('warningMessage');

function updateCharCount(){
    const charCountValue = textInput.value.length;
    charCount.innerText = `${charCountValue}/ ${limit} Characters`;
    warningMessage.innerText = '';

    if(charCountValue < limit){
        charCount.style.color = 'green';  
    }
    else if(charCountValue === limit){
        charCount.style.color = 'orange';
    }else {
        charCount.style.color = 'red';
        warningMessage.innerText = 'Character Limit Exceeded';
    }
}

textInput.addEventListener('input', updateCharCount);

// Task: build a feature to calculate number of unique words.

//agar limit reach karne ke baad typing band karwa deni ho to html file me textarea attribute me maxlength attribute laga dena hai 
// <textarea name="" id="textInput" placeholder="Type Here..." maxlength="200"></textarea>