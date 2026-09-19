const steps = document.querySelectorAll(".step");
const nextButtons = document.querySelectorAll(".next-btn");
const startButton = document.getElementById("start-btn");

let currentStep = 0;

function showStep() {

    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });

}

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentStep++;

        showStep();

    });

});


startButton.addEventListener("click", () => {

    window.location.href = "game.html";

});