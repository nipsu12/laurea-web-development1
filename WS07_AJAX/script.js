// Add an event listener that waits for the page to finish loading.
document.addEventListener('DOMContentLoaded', () => {

    // Find the element whose id is Quotes.
    const quoteContainer = document.getElementById('weatherdata');

    // Set the URI to the address from which the data will be fetched.
    const uri = "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=json&APPID=477514196a2fcb2d795224f86f53ef00";

    // Fetch data from the URI and handle the promise returned by fetch().
    fetch(uri)
        .then(response => response.json())
        .then(data => {
            // Call displayCustomerInfo() to process the data and display it on the page.
            displayCustomerInfo(data);
        })
        // If an error occurs, print it to the console.
        .catch(error => {
            console.error('Error fetching customer data:', error);
        });

    // Define displayCustomerInfo() to process the data and display it on the page.
    function displayCustomerInfo(quoteData) {
        // Loop through the quotes array and display each quote and its author.
        console.log(quoteData);

        const id = quoteData.weather ? quoteData.weather[0].description : "";
        const quote = quoteData.name + ": " + quoteData.main.temp + " °C";

        // Create a div containing the quote and author, then add it to quoteContainer.
        const quoteElement = document.createElement('div');
        quoteElement.innerHTML = `<h2> ${quote} </h2> <p> ${id} </p><hr>`;
        quoteContainer.appendChild(quoteElement);
    }
});