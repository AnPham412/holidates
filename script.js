const API_KEY = "938fcff6-62af-42ae-8414-b8c241d62cda"


// Render Countries List--------------------------------------------
const getCountries = async () => {
    try {
      const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`;
      //here is how we add a dynamic value (API KEY) to the url
      const res = await fetch(url);
      const data = await res.json();
      console.log("data", data); //have a look the retrieved data
      return data;
    } catch (err) {
      console.log("err", err);
    }
  };
  
  const renderCountries = async () => {
    try {
      const data = await getCountries();
      const countriesList = document.getElementById("countries-list");
      const ulCountriesList = countriesList.children[2];
      console.log(ulCountriesList);
      ulCountriesList.innerHTML = "";
      data.countries.forEach((country, index) => {
        const x = document.createElement("li");
        x.innerHTML = `<div class="bullet">${index + 1}</div>
              <div class="li-wrapper">
                  <div class="li-title">${country.name}</div>
                  <div>Code: ${country.code}</div>
              </div>`;
        ulCountriesList.appendChild(x);
      });
    } catch (err) {
      console.log("err", err);
    }
  };
  document.getElementById("countries-list-btn").addEventListener("click", () => {
    renderCountries();
  });


// Section RenderLanguagesList ------------------------------------------
const getLanguages = async () => {
    try {
      const url = `https://holidayapi.com/v1/languages?pretty&key=${API_KEY}`;
      //here is how we add a dynamic value (API KEY) to the url
      const res = await fetch(url);
      const data = await res.json();
      console.log("data", data); //have a look the retrieved data
      return data;
    } catch (err) {
      console.log("err", err);
    }
  };
  
  const renderLanguages = async () => {
    try {
      const data = await getLanguages();
      const languagesList = document.getElementById("languages-list");
      const ulLanguagesList = languagesList.children[2];
      ulLanguagesList.innerHTML = "";
      data.languages.forEach((languages, index) => {
        const x = document.createElement("li");
        x.innerHTML = `<div class="bullet">${index + 1}</div>
              <div class="li-wrapper">
                  <div class="li-title">${languages.name}</div>
                  <div>Code: ${languages.code}</div>
              </div>`;
        ulLanguagesList.appendChild(x);
      });
    } catch (err) {
      console.log("err", err);
    }
  };
  document.getElementById("languages-list-btn").addEventListener("click", () => {
    renderLanguages();
  });