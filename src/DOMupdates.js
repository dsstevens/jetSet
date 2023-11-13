const renderDashboard = () => {
  //call on functions that iterate individually over specific arrays
 
}

const tripList = document.querySelector('.trip-list');

export const renderTrips = (trips, destinations) => {
  //innerhtml to tiplist
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