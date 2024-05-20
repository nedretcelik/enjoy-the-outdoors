"use strict";

window.onload = function () {
  const nationalParksList = document.querySelector("#nationalParksList");

  const byLocationRadio = document.querySelector("#byLocationRadio");
  const byTypeRadio = document.querySelector("#byTypeRadio");

  function loadParks() {
    nationalParksList.innerText = "";

    let newOption = new Option("option");
    newOption.innerText = "Select";

    nationalParksList.appendChild(newOption);


    if (byLocationRadio.checked) {
      for (const park of nationalParksArray) {
        ListOfState(park);
      }
    } else if(byTypeRadio.checked) {
      for (const type of parkTypesArray) {
        listOfParkType(type)
      }
    }
  }
  
  function ListOfState(parkData) {
    let stateOption = new Option("option");
    stateOption.value = parkData.State;
    stateOption.innerText = parkData.State;

    nationalParksList.appendChild(stateOption);
  }

  function listOfParkType(parkData) {
    let parkTypeOption = new Option("option");
    parkTypeOption.value = parkData;
    parkTypeOption.innerText = parkData;

    nationalParksList.appendChild(parkTypeOption);
  }

  byLocationRadio.onchange = loadParks;
  byTypeRadio.onchange = loadParks;
};
