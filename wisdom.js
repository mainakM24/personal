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

function addQuotes(){
    const quoteList = document.getElementById("quotes-list");

    quotes.forEach(q => {
	const quoteBlock = document.createElement("li");
	quoteBlock.innerHTML = `- <q> ${q.text} </q>`;
	quoteList.appendChild(quoteBlock);
    });
}

addQuotes();
