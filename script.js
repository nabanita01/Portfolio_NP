// dynamic typing
var typed = new Typed(".text", {
    strings: ["Student.", "Frontend Devloper.", "Webpage Designer."],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 300,
    loop: true

})

// buttons handeling in about page 

const educationButton = document.querySelector('[data-target="education"]');
const skillsButton = document.querySelector('[data-target="skills"]');
const experienceButton = document.querySelector('[data-target="experience"]');

const educationSlide = document.querySelector('.education-slide');
const skillsSlide = document.querySelector('.skills-slide');
const experienceSlide = document.querySelector('.experience-slide');

function showCardSet(cardSet) {
    educationSlide.style.display = 'none';
    skillsSlide.style.display = 'none';
    experienceSlide.style.display = 'none';

    cardSet.style.display = 'block';
}

showCardSet(educationSlide); //defult education-slide

educationButton.addEventListener('click', function () {
    showCardSet(educationSlide);
});

skillsButton.addEventListener('click', function () {
    showCardSet(skillsSlide);
});

experienceButton.addEventListener('click', function () {
    showCardSet(experienceSlide);
});



