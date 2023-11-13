export const filterTripsUser = (userId, trips) => {
  // console.log(userId, trips)
  return trips.filter(trip => trip.userID === userId) 
}

/*

find values of the inputs 
get destination list to populate in drop down menu

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

//trip as an object created from inputs of the form, 

export const createTrip = () => {

  return trip
}

export const findCostOneTrip(trip) {
    const destination = destinations.find(place => place.id === trip.destinationID);
    const travelers = trip.travelers;
    const estimatedFlightCostPerPerson = destination.estimatedFlightCostPerPerson;
    const estimatedLodgingCostPerDay = destination.estimatedLodgingCostPerDay;
    const duration = trip.duration;
    
    const costOfTrip = ((travelers * estimatedFlightCostPerPerson) + (travelers * estimatedLodgingCostPerDay * duration)) * 1.1;
    
    return costOfTrip;
}


export const filterYearlyTrips = (userID) => {
    //take in the array of trips for the userID
    //filter them for this year - DATE
}

export const calculateYearlyCost = (yearlyTrips) => {
    //on load fn
    // refer to global destinations
     yearlyTrips.reduce((total, trip) => {
        destinations.find(element => {
            if (element.id === trip.destinationID) {
                total += (trip.travelers * element.estimatedFlightCostPerPerson) + (element.estimatedLodgingCostPerDay * trip.duration))
            } 
        })
        return total
    }, 0)
    total += (total * .1);
    console.log(total);
    return total
}


*/