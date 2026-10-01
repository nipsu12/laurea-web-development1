// 0. animal table:

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu!");

});

// 1. change heading:

const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

//change the heading style with button "muuta eläinteksti"
const heading = document.querySelector("#taskOneHeading");
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    heading.classList.toggle("highlight");
});

//change the text with button "muuta eläinteksti"
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Tiikerit ovat suuria kissaeläimiä.";
});

// 2. day's animal:

const animalContent = document.querySelector("#animalContent");

// heading for animal
const animalHeading = document.createElement("h3");
animalHeading.textContent = "Päivän eläin";
animalHeading.classList.add("animal-heading");

// text for animal
const animalParagraph = document.createElement("p");
animalParagraph.textContent = "Pandat syövät paljon bambuja ja elävät viidakossa.";

// picture for animal
const animalContentImage = document.createElement("img");
animalContentImage.src="img/panda.png";
animalContentImage.alt = "Panda";

// all elemtents
animalContent.append(
    animalHeading,
    animalParagraph,
    animalContentImage
);

// buttons for hdiding and showing
const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

// hiding
hideAnimalButton.addEventListener("click", function () {
    animalContent.hidden = true;
});

// showing
showAnimalButton.addEventListener("click", function () {
    animalContent.hidden = false;
});




// 3. dropdown animals:

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// listener for the select element from the drop down list.

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

      // function to update the DOM based on the selected animal

      console.log("selected animal:", selectedAnimal);

      if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImage.src = "img/tiikeri.png";
        animalImage.alt = "Tämä on tiikeri";
        animalDescription.textContent = "Tiikerit ovat raidallisia ja melko rauhallisia eläimiä";

      }
        else if (selectedAnimal === "elephant") {
        animalName.textContent = "Elefantti";
        animalImage.src = "img/elefantti.png";
        animalImage.alt = "Tämä on elefantti";
        animalDescription.textContent = "Elefantit ovat maailman suurimpia maaeläimiä";}

        else if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "img/panda.png";
        animalImage.alt = "Tämä on panda";
        animalDescription.textContent = "Pandat syövät paljon bambuja ja elävät viidakossa";}

        else if (selectedAnimal === "penguin") {
        animalName.textContent = "Pingviini";
        animalImage.src = "img/pingviini.png";
        animalImage.alt = "Tämä on pingviini";
        animalDescription.textContent = "Pingviinit elävät kylmissä olosuhteissa ja osa niistä osaa lentää";}

});

// adding mousenter event
animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});


// adding mouseleave event
animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});

// 4. form and table
const animalForm = document.querySelector("#animalForm");
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");

// sending form data to the table
animalForm.addEventListener("submit", function (event) {

    // blocking the site to reload
    event.preventDefault();

    // reading the values from the form
    const animal = observationAnimal.value;
    const location = observationLocation.value;
    const date = observationDate.value;

    // making sure that fields are not empty
    if (animal === "" || location === "" || date === "") {
        alert("Täytä kaikki kentät!");
        return;
    }

    // creating a new row for the table
    const newRow = document.createElement("tr");

    // creating cells
    const animalCell = document.createElement("td");
    const locationCell = document.createElement("td");
    const dateCell = document.createElement("td");

    // adding values to the cells
    animalCell.textContent = animal;
    locationCell.textContent = location;
    dateCell.textContent = date;

    // adding cells to row
    newRow.append(animalCell, locationCell, dateCell);

    // adding new row
    observationTableBody.append(newRow);
});