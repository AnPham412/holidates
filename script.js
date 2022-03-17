const API_KEY = "938fcff6-62af-42ae-8414-b8c241d62cda";

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
    //1. Fetch all the countries by using function `getCountries`
    const data = await getCountries();

    //2. Find the element with the id `countries-list`
    const countriesList = document.getElementById("countries-list");

    //3. Take out the `ul` element
    const ulCountriesList = countriesList.children[2];

    //4. Delete the sample inside `ul` element
    ulCountriesList.innerHTML = "";

    //5. Loop through the list of countries
    data.countries.forEach((country, index) => {
      //Create new `li` for each element
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${country.name}</div>
                <div>Code: ${country.code}</div>
            </div>`;

      //Then append them to the `ul` element
      ulCountriesList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};
document.getElementById("countries-list-btn").addEventListener("click", () => {
  renderCountries();
});
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

// Get holiday
document.getElementById("holidays-btn").addEventListener("click", () =>{
  renderHolidays()
})

const getHolidays = async ()=>{
  try{
    let Country_Key = document.getElementById("country-query").value
    if (Country_Key === "") {
      Country_Key = "VN"
    }
    let Month = document.getElementById("month-query").value
    let Day = document.getElementById("day-query").value
    changeCountry(Country_Key)
    const url = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}&country=${Country_Key}&year=2021&month=${Month}&day=${Day}`;
    const res = await fetch(url)
    const data = await res.json()
    console.log("data", data) //have a look the retrieved data
    return data
  } catch(err) {
    console.log("err", err)
  }
}

const renderHolidays = async()=>{
  try{
    const data = await getHolidays()
    const holidayList = document.getElementById("holidays-list")
    const ulHolidayList = holidayList.children[1]
    ulHolidayList.innerHTML=""
    data.holidays.forEach((holidays, index)=>{
      const x = document.createElement("li")
      x.innerHTML = `<div class="bullet">${index + 1}</div>
          <div class="li-wrapper">
              <div class="li-title">${holidays.name}</div>
              <div class="li-text">${holidays.weekday.date.name}, ${holidays.date}</div>
          </div>`;
      ulHolidayList.appendChild(x)
    })
  } catch(err){
    console.log("err", err)
  }
}

const changeCountry = async(countryCheck)=>{
  try {
    const data = await getCountries()
    const holidayList = document.getElementById("holidays-list")
    const ulHolidayList = holidayList.children[0]
    data.countries.forEach((countries, index)=>{
      if (countries.code===countryCheck) {
        ulHolidayList.innerText = `Holidays of ${countries.name}`;
      }
    })
  } catch(err){
    console.log("err", err)
  }
}
