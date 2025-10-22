const wordom = {
    projectName : "Wordom",
    description : "A simple Android app which shows a Word of the Day, and it refreshes every day.",
    links : ["https://github.com/mainakM24/wordom"],
    technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Koin"],
    screenshots : [
	"https://github.com/mainakM24/Wordom/raw/master/screenshots/Screenshot_2025-08-29-10-54-03-61_91f08973af2788a72f3413f23c22772b.jpg?",
	"https://github.com/mainakM24/Wordom/raw/master/screenshots/Screenshot_2025-08-29-10-54-21-46_91f08973af2788a72f3413f23c22772b.jpg?",
	"https://github.com/mainakM24/Wordom/raw/master/screenshots/Screenshot_2025-08-29-10-54-55-22_91f08973af2788a72f3413f23c22772b.jpg",
    ],
    ssWidth: 30
}

const shboot = {
    projectName : "Shboot",
    description : "A single player bubble shooter game completely made with raylib in C/C++",
    links : ["https://github.com/mainakM24/shboot"],
    technologies: ["C/C++", "Raylib", "gcc", "make"],
    screenshots : ["https://github.com/mainakM24/shboot/blob/main/screenshots/shboot-comp.gif?raw=true"],
    ssWidth: 100
}

const bint = {
    projectName : "BinT",
    description : "A time based binary guessing game created with Svelte JS. Every mnute there is a random (based on time) binary number wil appear and you have to guess it before hand , and can bet money (virtual) on it.",
    links : ["https://github.com/mainakM24/app-bin-T"],
    technologies: ["Svelte JS", "HTML", "CSS", "Typescript", "Pocketbase"],
    screenshots : ["https://github.com/mainakM24/app-bin-T/raw/main/screenshots/binT-2.png"],
    ssWidth: 100
}

const rhythm = {
    projectName : "Rhythm",
    description : "A health monitoring android app.",
    links : ["https://github.com/mainakM24/rhythm-patient-rewrite"],
    technologies: ["Java", "XML", "Retrofit", "MpAndroidChart", "Gradle"],
    screenshots : []
}

const expenseTracker = {
    projectName : "Expense Tracker",
    description : "This is a dynamic web application built using Java Servlets, JSP, JDBC, and MySQL. The project allows users to manage their budgets and expenses effectively.",
    links : ["https://github.com/mainakM24/expense-tracker"],
    technologies: ["Spring MVC", "JSP", "JDBC", "MySQL", "Tailwind CSS", "Maven"],
    screenshots : []
}

const boids = {
    projectName : "Boids Simulation",
    description : "Simulation of the boids flocking behaviour based on the Craig Reynold's Boids Algorithm. This is built by implementing a Game Loop in Jetpack compose.",
    links : ["https://github.com/mainakM24/boids-jetpack"],
    technologies: ["Jetpack Compose", "Kotlin", "Game Loop"],
    screenshots : ["https://github.com/mainakM24/boids-jetpack/blob/master/screenshots/boids.gif?raw=true"],
    ssWidth: 30
}

const sfmlClock = {
    projectName : "SFML Clock",
    description : "Simple clock app which shows the current system's time, made with SFLM in C++.",
    links : ["https://github.com/mainakM24/sfml-clock"],
    technologies: ["SFML", "C/C++", "make", "gcc"],
    screenshots : ["https://github.com/mainakM24/sfml-clock/blob/main/sfml-clock.gif?raw=true"],
    ssWidth: 100
}


const projects = [wordom, shboot, boids, sfmlClock, bint, rhythm, expenseTracker];

function addProjects(){
    const projectPage = document.getElementById("projects");

    projects.forEach(project => {
	const projectBlock = document.createElement("div");

	const techHTML = project.technologies.map(tech => `<div>${tech}</div>`).join("");

	const screenshotsHTML = project.screenshots.map(ss => `<img src="${ss}" alt="ss" height="auto" width="${project.ssWidth}%">`).join("");

	const linksHTML = project.links.map(link => `<a href="${link}">Github</a>`).join("");

	projectBlock.innerHTML = ` 
	    <h2># ${project.projectName}</h2>

	    <div class="screenshots">
		${screenshotsHTML}
	    </div>

	    <p> ${project.description} </p>

	    <h3>## Technology Used </h3>
	    <div class="para technology">
		${techHTML}
	    </div>

	    <h3>## Links</h3>
	    <div class="para links">
		${linksHTML}
	    </div>

	    <div class="spacer"></div>
	`;

	projectPage.appendChild(projectBlock);
    });
}

addProjects();

