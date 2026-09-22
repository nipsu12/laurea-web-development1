function showTable() {
    const animal1 = "Tiger";
    const habitat1 = "Forest";
    const diet1 = "Carnivore";

    const animal2 = "Elephant";
    const habitat2 = "Savanna";
    const diet2 = "Herbivore";

    const table = `
        <table id="example" class="display">
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Habitat</th>
                    <th>Diet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal1}</td>
                    <td>${habitat1}</td>
                    <td>${diet1}</td>
                </tr>
                <tr>
                    <td>${animal2}</td>
                    <td>${habitat2}</td>
                    <td>${diet2}</td>
                </tr>
            </tbody>
        </table>
    `;

    const destination = document.querySelector("#tableContainer");
    destination.innerHTML = table;
}

document.querySelector("h2").addEventListener("click", function() {
    this.style.color = "red";
    this.innerHTML = "Bye bye mouse!";
});

document.querySelector("h2:nth-of-type(2)").addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

const textarea = document.getElementById("feedback");
const status = document.getElementById("status");
const charcount = document.getElementById("charcount");
const preview = document.getElementById("preview");

// adding focus event
textarea.addEventListener("focus", function () {
    status.textContent = "You are writing feedback...";
    textarea.style.backgroundColor = "#fbc5fb";
});

// adding blur event
textarea.addEventListener("blur", function () {
    status.textContent = "";
    textarea.style.backgroundColor = "";
});

// adding input listener
textarea.addEventListener("input", function () {
    const text = textarea.value;

    charcount.textContent = `${text.length}/200`;
    preview.textContent = text || "(The preview will appear here)";
});
