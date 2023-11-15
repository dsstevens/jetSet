import {filterYearlyTrips, calculateYearlyCost, determineDestination, estimateTripCost} from "./utils";
import { detailTotalCost, detailDestination, detailImage } from "./scripts"


const tripList = document.querySelector('.trip-list');
const totalSpent = document.querySelector('.total-spent')

export const renderTrips = (trips, destinations) => {
  //hardcoded user without past/pending status for trip view
 trips.forEach(element => {
  const matchingDestination = destinations.find(destination => {
    return destination.id === element.destinationID
  })
  tripList.innerHTML += `
  <li>
    <dl>
      <dt>Destination:</dt>
      <dd>${matchingDestination.destination}</dd>
      <dt>Number of Travelers</dt>
      <dd>${element.travelers}</dd>
      <dt>Date</dt>
      <dd>${element.date}</dd>
      <dt>Number of Days</dt>
      <dd>${element.duration}</dd>
    </dl>
    <img src=${matchingDestination.image} alt=${matchingDestination.alt} width=100%/>
  </li>
  `
 })
}

//past/pending toggle fn for the buttons to display the trips section: refactor

export const dropdownDestinations = allDestinations => {
  allDestinations.forEach(element => {
    var option = document.createElement("option");
    option.text = element.destination;
    option.value = element.id;
    var select = document.getElementById("destinationList");
    select.appendChild(option);
  });
};

export const displayMoneySpent = (userTrips, allDestinations) => {
  const annualTrips = filterYearlyTrips(userTrips)
  const cost = calculateYearlyCost(annualTrips, allDestinations)
  console.log(cost)
  return totalSpent.innerText += `$${cost}`
}

export const setErrorMessage = (errorMessage) => {
  const formErrorElement = document.querySelector("#formError");
  formErrorElement.textContent = errorMessage;
};

export const displayEstimatedCost= (tripInfo, allDestinations) => {
  const estimate = estimateTripCost(tripInfo, allDestinations)
  console.log(estimate, "this is the estimated cost")
  return detailTotalCost.innerText = `$${estimate}`
}

export const displayEstimatedDestination = (tripInfo, allDestinations) => {
  const selectedDestination = determineDestination(tripInfo, allDestinations);
  const { destination, image, alt } = selectedDestination;
  console.log(selectedDestination, "destination object")
  detailDestination.innerText = destination;
  detailImage.src = image;
  detailImage.alt = alt || `Image of ${destination}`
};