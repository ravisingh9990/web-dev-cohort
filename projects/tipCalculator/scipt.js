const billAmountInput = document.getElementById('billAmount');
const tipPercentageInput = document.getElementById('tipPercentage');
const numPeopleInput = document.getElementById('numPeople');
const calculateButton = document.getElementById('calculateButton');
const totalTipDisplay = document.getElementById('totalTip');
const tipPerPersonDisplay = document.getElementById('tipPerPerson');



function calculateTip(){
    const billAmount =  parseFloat(billAmountInput.value);
    const tipPercentage =  parseFloat(tipPercentageInput.value);
    const numPeople =  parseInt(numPeopleInput.value);

    //Validation
    if(Number.isNaN(billAmount) || Number.isNaN(tipPercentage) || Number.isNaN(numPeople)){
        alert("Please Enter Valid Values for all the Fields");
        return;
    }

    const totalTip = (billAmount * tipPercentage) / 100;
    const tipPerPerson = totalTip / numPeople;

    totalTipDisplay.textContent = `Total Tip: Rs. ${totalTip.toFixed(2)}`;
    tipPerPersonDisplay.textContent = `Tip for each member is Rs. ${tipPerPerson.toFixed(2)}`;

}

calculateButton.addEventListener('click', calculateTip);