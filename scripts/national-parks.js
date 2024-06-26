"use strict";

window.onload = function () {
  const nationalParksList = document.querySelector("#nationalParksList");

  const byLocationRadio = document.querySelector("#byLocationRadio");
  const byTypeRadio = document.querySelector("#byTypeRadio");
  const viewAllParksOption = document.querySelector("#viewAllParksOption");

  const parksDetailDiv = document.querySelector("#parksDetailDiv");

  function loadParks() {
    nationalParksList.innerText = "";

    parksDetailDiv.innerText = "";

    if (byLocationRadio.checked) {
      nationalParksList.style.display = "block";
      let newOption = new Option("option");
      newOption.innerText = "Select Location";

      nationalParksList.appendChild(newOption);
      nationalParksArray.sort();
      for (const park of locationsArray) {
        buildSearchOptionState(park);
      }
    } else if (byTypeRadio.checked) {
      nationalParksList.style.display = "block";
      let newOption = new Option("option");
      newOption.innerText = "Select Park Type";

      nationalParksList.appendChild(newOption);
      parkTypesArray.sort();
      for (const type of parkTypesArray) {
        buildSearchOptionType(type);
      }
    }

    if (viewAllParksOption.checked) {
      nationalParksList.style.display = "none";
      for (const park of nationalParksArray) {
        showAllParks(park);
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

  function showAllParks(parkData) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "mt-5", "custom-card", "d-flex", "justify-content-center");
    parksDetailDiv.appendChild(cardDiv);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    cardDiv.appendChild(cardBody);

    let locationNameh4 = document.createElement("h4");
    locationNameh4.innerText = parkData.LocationName;
    cardBody.appendChild(locationNameh4);

    let locationNameh5 = document.createElement("h5");
    locationNameh5.innerText = "Adress: ";
    cardBody.appendChild(locationNameh5);

    let addressP = document.createElement("p");
    addressP.innerText = `${parkData.Address}`;
    cardBody.appendChild(addressP);

    let locationP = document.createElement("p");
    locationP.innerText = `${parkData.City}, ${parkData.State} ${parkData.ZipCode}`;
    cardBody.appendChild(locationP);

    let phoneP = document.createElement("p");
    phoneP.innerText = `Phone: ${parkData.Phone}`;
    cardBody.appendChild(phoneP);

    let faxP = document.createElement("p");
    faxP.innerText = `Fax: ${parkData.Fax}`;
    cardBody.appendChild(faxP);

    if (parkData.Visit) {
      let visitLinkP = document.createElement("a");
      visitLinkP.href = ` ${parkData.Visit}`;
      visitLinkP.innerText = `Visit: ${parkData.Visit}`;
      cardBody.appendChild(visitLinkP);
    }
  }

  function buildNationalParksDetailCard() {
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
        locationNameh5.innerText = "Address: ";
        cardBody.appendChild(locationNameh5);

        let addressP = document.createElement("p");
        addressP.innerText = `${park.Address}`;
        cardBody.appendChild(addressP);

        let locationP = document.createElement("p");
        locationP.innerText = `${park.City}, ${park.State} ${park.ZipCode}`;
        cardBody.appendChild(locationP);

        if (park.Phone == 0) {
          let phoneP = document.createElement("p");
          phoneP.innerText = `Phone: N/A`;
          cardBody.appendChild(phoneP);
        } else {
          let phoneP = document.createElement("p");
          phoneP.innerText = `Phone: ${park.Phone}`;
          cardBody.appendChild(phoneP);
        }

        if (park.Fax == 0) {
          let faxP = document.createElement("p");
          faxP.innerText = `Fax: N/A`;
          cardBody.appendChild(faxP);
        } else {
          let faxP = document.createElement("p");
          faxP.innerText = `Fax: ${park.Fax}`;
          cardBody.appendChild(faxP);
        }

        if (park.Visit) {
          let visitLinkP = document.createElement("a");
          visitLinkP.href = ` ${park.Visit}`;
          visitLinkP.innerText = `Visit: ${park.Visit}`;
          visitLinkP.target = "_blank";

          cardBody.appendChild(visitLinkP);
        }
      }
    }
  }

  byLocationRadio.onchange = loadParks;
  byTypeRadio.onchange = loadParks;
  viewAllParksOption.onchange = loadParks;

  nationalParksList.onchange = buildNationalParksDetailCard;
};
