// Store your OpenWeatherMap API key.
const apiKey = "477514196a2fcb2d795224f86f53ef00";

// Find the HTML element where we display the weather data.
const weatherDataElement = document.getElementById("weatherdata");

// Run this function when the user clicks the "Fetch data" button.
// async allows us to use await inside the function.
async function fetchWeatherData(city = "Helsinki", parseData = false) {

    // Display a loading message.
    weatherDataElement.textContent = "Ladataan säätietoja...";

    // Try to fetch and process the weather data.
    try {

        // Send a GET request to the weather API and wait for the response.
        // q=Helsinki selects the city.
        // units=metric gives the temperature in Celsius.
        // mode=xml requests the data in XML format.
        // ${apiKey} inserts our API key into the URL.
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(city) + "&units=metric&mode=xml&APPID=" + apiKey;
        const response = await fetch(url);

        // Check whether the API returned a successful HTTP status.
        if (!response.ok) {
            // Create an error and jump to the catch block.
            throw new Error("HTTP error! Status: " + response.status);
        }

        // Read the response body as text and wait until it is ready.
        const xmlText = await response.text();

        if (parseData) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, "text/xml");

            const cityName = xmlDoc.querySelector("city")?.getAttribute("name") || city;
            const temp = xmlDoc.querySelector("temperature")?.getAttribute("value");
            const humidity = xmlDoc.querySelector("humidity")?.getAttribute("value");
            const clouds = xmlDoc.querySelector("clouds")?.getAttribute("name");

            weatherDataElement.innerHTML = `
                <h3>Sää kaupungissa: ${cityName}</h3>
                <p><b>Lämpötila:</b> ${temp} °C</p>
                <p><b>Pilvisyys:</b> ${clouds}</p>
                <p><b>Ilmankosteus:</b> ${humidity} %</p>
            `;
        } else {
            // Display the XML as plain text on the page.
            weatherDataElement.textContent = xmlText;
        }

    // Handle errors from the request or the code above.
    } catch (error) {

        // Choose an error message in the page's language.
        const errorMessage = "Virhe säätietojen haussa.";
        console.error("Error fetching weather data:", error);

        // Display the message and details of the error.
        weatherDataElement.innerHTML = `<p style="color: red;">${errorMessage} (${error.message})</p>`;
    }
}