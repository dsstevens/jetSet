import { startDate, endDate } from "./scripts"

let currentTraveler 

//TRIP FNS

export const filterTripsUser = (userId, trips) => {
  return trips.filter(trip => trip.userID === userId) 
}

export const determineDestination = (tripDetail, destinations) => {
  return destinations.find(element => {
     return element.id === tripDetail.destinationID
 });
 }

 export const filterYearlyTrips = (userTrips) => {
  const currentYear = new Date("11/11/2022").getFullYear()
  // console.log(currentYear)
    const yearlyTrips = userTrips.filter(trip => new Date(trip.date).getFullYear() === currentYear)
    // console.log(yearlyTrips)
    return yearlyTrips
}

export const createTrip = (trip) => {
    trip = {
      id: Date.now(),
      userID: 3 || currentTraveler.id,
      destinationID:  parseInt(destinationList.value),
      travelers: parseInt(numberTravelers.value),
      date: formatDate(startDate.value),
      duration: calculateDuration(startDate.value, endDate.value),
      status: "pending",
      suggestedActivities: []
    };
    return trip
  }


//TIME FUNCTIONS

export const calculateDays = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const duration = (end - start) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
  return duration;
}

const formatDate = (dateString) => {
  return dateString.split('-').join('/');
};

export const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dayCount = (end - start) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
  return dayCount;
}

//COST FNS

export const estimateTripCost = (tripInfo, allDestinations)  => {
  let total;
  const destCost = determineDestination(tripInfo, allDestinations)
  total = ((tripInfo.travelers * destCost.estimatedFlightCostPerPerson) + (destCost.estimatedLodgingCostPerDay * tripInfo.duration));
  console.log(total);
  return total += (total * .1);
};

export const calculateYearlyCost = (yearlyTrips, allDestinations) => {
  const totalCost = yearlyTrips.reduce((total, trip) => {
    const destination = allDestinations.find(element => element.id === trip.destinationID);
    if (destination) {
      total += (trip.travelers * destination.estimatedFlightCostPerPerson) + (destination.estimatedLodgingCostPerDay * trip.duration);
    }
    return total;
  }, 0);
  const finalCost = totalCost + (totalCost * 0.1);
  // console.log(finalCost);
  return finalCost;
};
   

