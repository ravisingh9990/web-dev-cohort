const colorButton = document.getElementById('colorButton');

function updateBG(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

colorButton.addEventListener('click', updateBG);

// Task: try this with images insted of background colors 
//Take an array of 10 to 15 images and try suffling with those images