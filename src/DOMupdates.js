import { allDestinations } from "./scripts"

const tripList = document.querySelector('.trip-list');

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
    <img src=${matchingDestination.image} alt=${matchingDestination.alt}/>
  </li>
  `
 })
}

//past/pending toggle fn for the buttons to display the trips section

export const dropdownDestinations = allDestinations => {
  allDestinations.forEach(element => {
    var option = document.createElement("option");
    option.text = element.destination;
    option.value = "myvalue";
    var select = document.getElementById("destinationList");
    select.appendChild(option);
  });
};

