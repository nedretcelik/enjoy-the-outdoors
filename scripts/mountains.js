"use strict";

window.onload = function () {
  const mountainsList = document.querySelector("#mountainsList");
  const mountainDetailsDiv = document.querySelector("#mountainDetailsDiv");

  function loadMountains() {
    mountainsArray.sort((a, b) => a.name.localeCompare(b.name));
    for (const mountain of mountainsArray) {
      buildSearchOption(mountain);
      // showMountainDetails(mountain);
    }
  }

  function buildSearchOption(mountainData) {
    let mountainOption = new Option("option");
    mountainOption.value = mountainData.name;
    mountainOption.innerText = mountainData.name;

    mountainsList.appendChild(mountainOption);
  }

  function showMountainDetails() {
    mountainDetailsDiv.innerText = "";

    for (const mountain of mountainsArray) {
      if (mountain.name == mountainsList.value) {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "mt-5", "custom-card-m", "d-flex", "justify-content-center");
        mountainDetailsDiv.appendChild(cardDiv);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "cardb-bg", "justify-content-center");
        cardDiv.appendChild(cardBody);

        let mountainImage = document.createElement("img");
        mountainImage.src = mountain.img;
        mountainImage.alt = mountain.name;

        cardBody.appendChild(mountainImage);

        let mountainNameH5 = document.createElement("h5");
        mountainNameH5.innerText = mountain.name;

        cardBody.appendChild(mountainNameH5);

        let mountainDescP = document.createElement("p");
        mountainDescP.innerText = "Description: " + mountain.desc;

        cardBody.appendChild(mountainDescP);

        let mountainElevationP = document.createElement("p");
        mountainElevationP.innerText = "Elevation: " + mountain.elevation;

        cardBody.appendChild(mountainElevationP);

        getSunsetForMountain(mountain.coords.lat, mountain.coords.lng).then((data) => {
          console.log(data.results);

          let sunriseP = document.createElement("p");
          sunriseP.innerText = "Sunrise: " + data.results.sunrise +" UTC";
          cardBody.appendChild(sunriseP);

          let sunsetP = document.createElement("p");
          sunsetP.innerText = "Sunset: " + data.results.sunset +" UTC";
          cardBody.appendChild(sunsetP);

          /* {sunrise: '9:09:20 AM', sunset: '12:18:05 AM', solar_noon: '4:43:43 PM', day_length: '15:08:45', civil_twilight_begin: '8:36:19 AM', …} */
        });
      }
    }
  }

  async function getSunsetForMountain(lat, lng) {
    let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    return data;
  }

  loadMountains();
  mountainsList.onchange = showMountainDetails;
};
