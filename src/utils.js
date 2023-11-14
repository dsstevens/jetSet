import { dropdownDestinations } from "./DOMupdates"
import { currentTraveler, allDestinations } from "./scripts"

export const filterTripsUser = (userId, trips) => {
  // console.log(userId, trips)
  //
  return trips.filter(trip => trip.userID === userId) 
}

/*

let currentTraveler 

let trip = {
  id: null,
  userID: null,
  destinationID: null,
  date: "",
  duration: null,
  status: "pending",
  suggestedActivities: []
}
//** trip keys have "" and look to be strings: JSON

find values of the inputs
trip as an object created from inputs of the form, 
when jetSet button is clicked, 

export const createTrip = () => {
  trip.id = Date.now
  trip.userID = currentTraveler.id
  trip.destinationID = 

  return trip
}
*/

// export const findCostOneTrip(trip) {
//     const destination = destinations.find(place => place.id === trip.destinationID);
//     const travelers = trip.travelers;
//     const estimatedFlightCostPerPerson = destination.estimatedFlightCostPerPerson;
//     const estimatedLodgingCostPerDay = destination.estimatedLodgingCostPerDay;
//     const duration = trip.duration;
    
//     const costOfTrip = ((travelers * estimatedFlightCostPerPerson) + (travelers * estimatedLodgingCostPerDay * duration)) * 1.1;
    
//     return costOfTrip;
// }


export const filterYearlyTrips = (userTrips) => {
  const currentYear = new Date("11/11/2022").getFullYear()
  console.log(currentYear)
    const yearlyTrips = userTrips.filter(trip => new Date(trip.date).getFullYear() === currentYear)
    console.log(yearlyTrips)
    return yearlyTrips
}

export const calculateYearlyCost = (yearlyTrips, allDestinations) => {
  const totalCost = yearlyTrips.reduce((total, trip) => {
    const destination = allDestinations.find(element => element.id === trip.destinationID);
    if (destination) {
      total += (trip.travelers * destination.estimatedFlightCostPerPerson) + (destination.estimatedLodgingCostPerDay * trip.duration);
    }
    return total;
  }, 0);
  const finalCost = totalCost + (totalCost * 0.1);
  console.log(finalCost);
  return finalCost;
};
   

