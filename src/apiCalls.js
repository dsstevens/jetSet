import { userTrips, allDestinations } from "./scripts"
import { renderTrips } from "./DOMupdates";

const getFetch = (data) => {
  return fetch(`http://localhost:3001/api/v1/${data}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      //display in error message as alert or in an element
      console.log(error, "<---Error")
    });
};

export const getAllFetches = (userId) => {
  // let userId = 3 ? `http://localhost:3001/api/v1/travelers/${userId}` 
  return Promise.all([
    getFetch(`travelers/${userId}`),
    getFetch('trips'),
    getFetch('destinations'),
  ])
}

export const postnewTrip = (newTrip) => {
  return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTrip),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error");
    }
    return response.json();
  })
  .then((allData) => {
    userTrips.push(allData.newTrip)
    console.log(allDestinations, "<---- after push destinations")
    renderTrips(userTrips, allDestinations)
})
  .catch(error => console.error('Error:', error));
};



