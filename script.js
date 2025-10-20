const greetings = ['Hello', '你好', 'Hola', 'Hallo', 'Giea', 'Ciao', 'Bonjour', 'नमस्ते'];
const colors = [
    "#f796ae",   "#6e84ffff", "#a0faa0",   "#f5c377ff", 
    "#e77bfaff", "#7bd5feff", "#f2ff7cff", "#ff8178ff"  
];
const quotes = [
    { date: "2025-09-10", text: "The sad one is happier than the angry one." },
    { date: "2023-03-17", text: "Human life is all about gathering as much experience as possible including crimes" },
    { date: "2023-07-29", text: "You only have true freedom until you're in your mother's womb, as soon as you born you're enslaved by law." },
    { date: "2024-01-08", text: "Age is not linear continuum, it's a circular continuum." },
    { date: "2024-03-15", text: "Freedom is either you have nothing to lose or you have too much that loosing doesn't even matter." },
    { date: "2024-05-27", text: "First there is You; then there is God- the creator of You; then there is You- the creator of God" },
    { date: "2024-07-09", text: "I do the wrong things just to show people that nothing is right" },
    { date: "2024-10-24", text: "Let it flow, don't interrupt! (Free life)" },
    { date: "2025-01-02", text: "Our brain is not capable of holding the truth. So when you get enlightenment, you go mad!" },
    { date: "2025-06-18", text: "True freedom is unattainable in a social life. There is always someone to intervene." },
    { date: "2025-07-11", text: "Freedom is paradoxical." },
];

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

function addQuotes(){
    const quoteList = document.getElementById("quotes-list");

    quotes.forEach(q => {
	const quoteBlock = document.createElement("li");
	quoteBlock.innerHTML = `- <q> ${q.text} </q>`;
	quoteList.appendChild(quoteBlock);
    });
}

addQuotes();
displayColor();
setInterval(displayColor, 4000);
setInterval(changeGreeting, 4000);
