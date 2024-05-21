"use strict";

window.onload = function () {
  const nationalParksList = document.querySelector("#nationalParksList");

  const byLocationRadio = document.querySelector("#byLocationRadio");
  const byTypeRadio = document.querySelector("#byTypeRadio");

  const parksDetailDiv = document.querySelector("#parksDetailDiv");

  function loadParks() {
    nationalParksList.innerText = "";

    let newOption = new Option("option");
    newOption.innerText = "Select";

    nationalParksList.appendChild(newOption);

    parksDetailDiv.innerText = "";

    if (byLocationRadio.checked) {
      nationalParksArray.sort();
      for (const park of locationsArray) {
        buildSearchOptionState(park);
      }
    } else if (byTypeRadio.checked) {
      parkTypesArray.sort();
      for (const type of parkTypesArray) {
        buildSearchOptionType(type);
      }
    }
  }

  function buildSearchOptionState(parkData) {
    let stateOption = new Option("option");
    stateOption.value = parkData;
    stateOption.innerText = parkData;


    nationalParksList.appendChild(stateOption); 
  }

  function buildSearchOptionType(parkData) {
    let parkTypeOption = new Option("option");
    parkTypeOption.value = parkData;
    parkTypeOption.innerText = parkData;

    nationalParksList.appendChild(parkTypeOption);
  }

  function nationalParksDetailCard() {
    parksDetailDiv.innerText = "";

    for (const park of nationalParksArray) {
      if (park.State == nationalParksList.value || park.LocationName.indexOf(nationalParksList.value) != -1) {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "mt-5", "custom-card", "d-flex", "justify-content-center");
        parksDetailDiv.appendChild(cardDiv);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        cardDiv.appendChild(cardBody);

        let locationNameh4 = document.createElement("h4");
        locationNameh4.innerText = park.LocationName;
        cardBody.appendChild(locationNameh4);

        let locationNameh5 = document.createElement("h5");
        locationNameh5.innerText = "Adress: ";
        cardBody.appendChild(locationNameh5);

        let addressP = document.createElement("p");
        addressP.innerText = `${park.Address}`;
        cardBody.appendChild(addressP);

        let locationP = document.createElement("p");
        locationP.innerText = `${park.City}, ${park.State} ${park.ZipCode}`;
        cardBody.appendChild(locationP);

        let phoneP = document.createElement("p");
        phoneP.innerText = `Phone: ${park.Phone}`;
        cardBody.appendChild(phoneP);

        let faxP = document.createElement("p");
        faxP.innerText = `Fax: ${park.Fax}`;
        cardBody.appendChild(faxP);
      }
    }
  }

  byLocationRadio.onchange = loadParks;
  byTypeRadio.onchange = loadParks;

  nationalParksList.onchange = nationalParksDetailCard;
};
