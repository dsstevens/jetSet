export const filterTripsUser = (userId, trips) => {
  // console.log(userId, trips)
  return trips.filter(trip => trip.userID === userId) 
}

