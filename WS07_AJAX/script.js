// Add an event listener that waits for the page to finish loading.
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // HARJOITUS 1: JSONin perusteet
    // ==========================================
    const jsonText = '{ "employees" : [' +
        '{ "firstName":"John" , "lastName":"Doe" },' +
        '{ "firstName":"Anna" , "lastName":"Smith" },' +
        '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    const jsondataDiv = document.getElementById("jsondata");
    const btnNames = document.getElementById("btnNames");
    const btnAll = document.getElementById("btnAll");

    if (btnNames) {
        btnNames.addEventListener("click", () => {
            const data = JSON.parse(jsonText);
            let html = "<ul>";
            for (let i = 0; i < data.employees.length; i++) {
                html += `<li>${data.employees[i].firstName} ${data.employees[i].lastName}</li>`;
            }
            html += "</ul>";
            jsondataDiv.innerHTML = html;
        });
    }

    if (btnAll) {
        btnAll.addEventListener("click", () => {
            const data = JSON.parse(jsonText);
            let html = "<h3>Kaikki työntekijät:</h3><ul>";
            for (let i = 0; i < data.employees.length; i++) {
                html += `<li><b>Etunimi:</b> ${data.employees[i].firstName}, <b>Sukunimi:</b> ${data.employees[i].lastName}</li>`;
            }
            html += "</ul>";
            jsondataDiv.innerHTML = html;
        });
    }


    // ==========================================
    // HARJOITUS 2: JSONin parsiminen verkosta (OMDB API)
    // ==========================================
    const rawdataDiv = document.getElementById("rawdata");
    const omdbUri = "https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750";
    const btnRawOmdb = document.getElementById("btnRawOmdb");
    const btnParsedOmdb = document.getElementById("btnParsedOmdb");

    // 1. Painike: Raaka data (.then / .catch)
    if (btnRawOmdb) {
        btnRawOmdb.addEventListener("click", () => {
            rawdataDiv.textContent = "Ladataan dataa...";
            fetch(omdbUri)
                .then(response => {
                    if (!response.ok) throw new Error("HTTP-virhe: " + response.status);
                    return response.text();
                })
                .then(textData => {
                    rawdataDiv.textContent = textData;
                })
                .catch(error => {
                    console.error("Error fetching raw data:", error);
                    rawdataDiv.innerHTML = `<p style="color: red;">Virhe haussa: ${error.message}</p>`;
                });
        });
    }

    // 2. Painike: Parsittu data taulukoksi (.then / .catch)
    if (btnParsedOmdb) {
        btnParsedOmdb.addEventListener("click", () => {
            rawdataDiv.textContent = "Ladataan ja parsitaan dataa...";
            fetch(omdbUri)
                .then(response => {
                    if (!response.ok) throw new Error("HTTP-virhe: " + response.status);
                    return response.json();
                })
                .then(data => {
                    displayOmdbData(data);
                })
                .catch(error => {
                    console.error("Error fetching parsed data:", error);
                    rawdataDiv.innerHTML = `<p style="color: red;">Virhe haussa: ${error.message}</p>`;
                });
        });
    }

    function displayOmdbData(data) {
        if (!data.Search) {
            rawdataDiv.textContent = "Elokuvia ei löytynyt.";
            return;
        }

        let tableHtml = `
            <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr>
                        <th>Kuva</th>
                        <th>Otsikko</th>
                        <th>Vuosi</th>
                        <th>IMDB ID</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (let i = 0; i < data.Search.length; i++) {
            const movie = data.Search[i];
            const poster = (movie.Poster && movie.Poster !== "N/A") ? movie.Poster : "";
            tableHtml += `
                <tr>
                    <td>${poster ? `<img src="${poster}" alt="${movie.Title}" width="80">` : 'Ei kuvaa'}</td>
                    <td><b>${movie.Title}</b></td>
                    <td>${movie.Year}</td>
                    <td>${movie.imdbID}</td>
                </tr>
            `;
        }

        tableHtml += "</tbody></table>";
        rawdataDiv.innerHTML = tableHtml;
    }


    // ==========================================
    // HARJOITUS 3: OpenWeatherMap API (JSON)
    // ==========================================
    const apiKey = "477514196a2fcb2d795224f86f53ef00";
    const weatherDataElement = document.getElementById("weatherdata");
    const fetchWeatherBtn = document.getElementById("fetchWeather");
    const citySelect = document.getElementById("city");
    const searchBtn = document.getElementById("search");
    const searchInput = document.getElementById("citysearch");

    function fetchWeatherData(city = "Helsinki", parseData = false) {
        weatherDataElement.textContent = "Ladataan säätietoja...";
        const uri = "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(city) + "&units=metric&mode=json&APPID=" + apiKey;

        fetch(uri)
            .then(response => {
                if (!response.ok) throw new Error("HTTP error! Status: " + response.status);
                return parseData ? response.json() : response.text();
            })
            .then(data => {
                if (parseData) {
                    displayWeatherData(data, city);
                } else {
                    weatherDataElement.textContent = data;
                }
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weatherDataElement.innerHTML = `<p style="color: red;">Virhe säätietojen haussa: (${error.message})</p>`;
            });
    }

    function displayWeatherData(data, city) {
        const cityName = data.name || city;
        const temp = data.main ? data.main.temp : "Ei tietoa";
        const humidity = data.main ? data.main.humidity : "Ei tietoa";
        const clouds = (data.weather && data.weather[0]) ? data.weather[0].description : "Ei tietoa";

        weatherDataElement.innerHTML = `
            <h3>Sää kaupungissa: ${cityName}</h3>
            <p><b>Lämpötila:</b> ${temp} °C</p>
            <p><b>Ilmankosteus:</b> ${humidity} %</p>
            <p><b>Pilvisyys:</b> ${clouds}</p>
        `;
    }

    // Tapahtumankuuntelijat
    if (fetchWeatherBtn) {
        fetchWeatherBtn.addEventListener("click", () => fetchWeatherData("Helsinki", false));
    }
    if (citySelect) {
        citySelect.addEventListener("change", (e) => fetchWeatherData(e.target.value, true));
    }
    if (searchBtn) {
        searchBtn.addEventListener("click", () => {
            const city = searchInput.value.trim();
            if (city) fetchWeatherData(city, true);
        });
    }
});