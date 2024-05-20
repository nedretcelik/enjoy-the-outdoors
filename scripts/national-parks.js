"use strict";

window.onload = function () {
  const nationalParksList = document.querySelector("#nationalParksList");

  function loadParks() {
    for (const park of nationalParksArray) {
      ListOfState(park)
    }
  }

  function ListOfState(parkData) {
    let stateOption = new Option("option");
    stateOption.value = parkData.State;
    stateOption.innerText = parkData.State;

    nationalParksList.appendChild(stateOption);
  }

  loadParks();
};
