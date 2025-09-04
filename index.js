const greetings = ['Hello', '你好', 'Hola', 'Hallo', 'Giea', 'Ciao', 'Bonjour', 'नमस्ते'];
const colors = [
    "#f796ae",   "#6e84ffff", "#a0faa0",   "#f5c377ff", 
    "#e77bfaff", "#7bd5feff", "#f2ff7cff", "#ff8178ff"  
]

const greet = document.getElementById("greet");
const colorGrid = document.querySelector(".grid");
const colorBoxes = document.querySelectorAll('.grid div');
const toast = document.getElementById('toast');

let currentIndex = 0;
let colorIndex = 0;
let isColorGridHovered = false;

function changeGreeting() {
    greet.style.opacity = 0;

    setTimeout(() => {
        greet.textContent = greetings[currentIndex];
        greet.style.opacity = 1;
        currentIndex = (currentIndex + 1) % greetings.length;
    }, 500);
}


function displayColor() {
    if (isColorGridHovered) {
        colorBoxes.forEach((box, i) => box.style.backgroundColor = colors[i]);
    } else {
        colorBoxes.forEach(box => box.style.backgroundColor = "#444");
        if (colorIndex > 3) colorBoxes[11 - colorIndex].style.backgroundColor = colors[11 - colorIndex];
        else colorBoxes[colorIndex].style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colorBoxes.length;
    }
}

colorBoxes.forEach((box, i) => {

    box.addEventListener("mouseenter", () => {
        isColorGridHovered = true;
        displayColor();
    })

    box.addEventListener("mouseleave", () => {
        isColorGridHovered = false;
        displayColor();
    })
    
    box.addEventListener("click", () => {
        navigator.clipboard.writeText(colors[i]).then(() => {
            toast.textContent = colors[i] + " Copied";
            toast.style.borderColor = colors[i];
            toast.style.color = colors[i];
            toast.classList.remove('hidden');
            toast.style.animation = 'toast-in 0.5s ease'

            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3000);
        });
    })
});


displayColor();
setInterval(displayColor, 4000);
setInterval(changeGreeting, 4000);