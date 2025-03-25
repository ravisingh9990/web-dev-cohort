const colorInput = document.getElementById('colorInput');
const colorCode = document.getElementById('colorCode');
const copyButton = document.getElementById('copyButton');
const complementoryContainer = document.getElementById('complementoryContainer');
const saveColorButton = document.getElementById('saveColorButton');
const favouritesContainer = document.getElementById('favouritesContainer');

colorInput.addEventListener("input", () => {
    const selectedColor = colorInput.value;
    updateColorDisplay(selectedColor);
    showComplementoryColor(selectedColor);
});

function updateColorDisplay(color){
    colorCode.textContent = color;
    colorCode.style.color = color; 
}

function showComplementoryColor(color){
    const complementoryColors = getComplementoryColor(color);
    complementoryContainer.innerHTML = "";

    complementoryColors.forEach((compColor) => {
      const colorBox =  document.createElement("div");
      colorBox.classList.add("color-box");
      colorBox.style.backgroundColor = compColor;
      complementoryContainer.appendChild(colorBox);
    });
}

function getComplementoryColor(color){
   const base = parseInt(color.slice(1), 16);
   const compliment = (0xffffff ^ base).toString(16).padStart(6, "0");
   return [`#${compliment}`];
}

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(colorCode.textContent)
    .then(() => alert("Color Code Copied")) //never use in production 
    .cath((err) => console.log("Failed to Copy", err));
});

saveColorButton.addEventListener("click", () => {
    const color = colorCode.textContent;
    addFavouriteColor(color);
});

function addFavouriteColor(color){
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;
    colorBox.title = color; //optional 
    favouritesContainer.appendChild(colorBox);
}


//Task: save complimentory colors as well with your favourite color.