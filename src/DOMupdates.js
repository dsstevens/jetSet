import {filterYearlyTrips, calculateYearlyCost, determineDestination} from "./utils";
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

// export const displayEstimatedDestination= (tripInfo, allDestinations) => {
// // on jet set click, render the associated image with the selected destination
// // render price of the selection


// // match the destination id to the destination array and find the price
//   determineDestination(tripInfo, allDestinations) //resolves to the destination object
  
//   return detailTotalCost.innerText += `$${cost}`,  detailDestination.innerText += `${destinationName}`
// }
//from chat, needs work, error that detail destination is not defined
export const displayEstimatedDestination = (tripInfo, allDestinations) => {
  // Find the destination based on the destinationID
  const selectedDestination = determineDestination(tripInfo, allDestinations);
  console.log(selectedDestination, '<----destination choice')
  // Access the relevant properties from the selected destination
  const { destination, image, alt } = selectedDestination;

  // Update the DOM elements
  detailDestination.innerText = destination;
  detailImage.src = image;
  detailImage.alt = alt || `Image of ${destination}`;
};