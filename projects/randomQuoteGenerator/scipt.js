const quotes = [
    "Life is short, and it is up to you to make it sweet. — Sarah Louise Delany",
    "Enjoy the little things, for one day you may look back and realize they were the big things. — Robert Brault",
    "Live life to the fullest, and focus on the positive. — Matt Cameron",
    "Don't wait. Life goes faster than you think. — Unknown",
    "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
    "Life is either a daring adventure or nothing at all. — Helen Keller",
    "To live is the rarest thing in the world. Most people exist, that is all. — Oscar Wilde",
    "Do more things that make you forget to check your phone. — Unknown",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "Make each day your masterpiece. — John Wooden",
    "Dance like nobody's watching, love like you've never been hurt, and live like it's heaven on earth. — Mark Twain",
    "Collect beautiful moments, not things. — Unknown",
    "The best way to predict your future is to create it. — Abraham Lincoln",
    "Every day is a new beginning. Take a deep breath, smile, and start again. — Unknown",
    "Life is too important to be taken seriously. — Oscar Wilde",
    "Be fearless in the pursuit of what sets your soul on fire. — Jennifer Lee",
    "Life is not about how many breaths you take, but about the moments that take your breath away. — Unknown",
    "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience. — Eleanor Roosevelt",
    "Live your life by a compass, not a clock. — Stephen Covey",
    "Smile more. Laugh more. Enjoy every moment. Life’s too short for anything less. — Unknown"
]

const generateButton = document.getElementById('generateButton');
const quoteDisplay = document.getElementById('quoteDisplay');

function generateQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomIndex]
    quoteDisplay.innerText = quote 
}

generateButton.addEventListener("click", generateQuote);


//Task: Once a quote is displayed it should not display again very soon.