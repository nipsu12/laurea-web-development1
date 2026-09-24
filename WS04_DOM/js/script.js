const changeHeadingButton = document.querySelector("#changeHeadingButton");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changeTextButton = document.querySelector("#changeTextButton");

const heading = document.querySelector("#taskOneHeading");
const animalText = document.querySelector("#animalText");

changeHeadingButton.addEventListener("click", () => {
    heading.textContent = "Muokattu otsikko!";
});

changeStyleButton.addEventListener("click", () => {
    heading.classList.toggle("highlight");
});

changeTextButton.addEventListener("click", () => {
    if (animalText.textContent === "Elefantit ovat maailman suurimpia maaeläimiä.") {
        animalText.textContent = "Kirahvit ovat maailman pisimpiä maaeläimiä.";
    } else {
        animalText.textContent = "Elefantit ovat maailman suurimpia maaeläimiä.";
    }
});


animalButton.addEventListener('click', function() {
    animalTable.hidden = !animalTable.hidden;
    console.log("Nappia painettu");

});

const animalSelect = document.querySelector('#animalSelect');
const animalName = document.querySelector('#animalName');
const animalImage = document.querySelector('#animalImage');
const animalDescription = document.querySelector('#animalDescription');

animalSelect.addEventListener('change', function() {
    const selectedAnimal = animalSelect.value;

    //function to update the dom based on the selected animal
    
    console.log("Selected animal: " + selectedAnimal);

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImage.src = "images/tiger.jpg";
        animalImage.alt = "Tämä on tiikeri";
        animalDescription.textContent = "Tiikeri on suuri kissaeläin, joka tunnetaan voimastaan ja kauneudestaan.";


    }


})