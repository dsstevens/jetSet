// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import { getAllFetches } from "./apiCalls"
import { renderTrips } from "./DOMupdates"
import { filterTripsUser } from "./utils"

//QUERY SELECTORS:
const welcomeMessage = document.querySelector('.welcome-message');
const accountButton = document.querySelector('#accountButton');
const startDate = document.querySelector('#startDate');
const endDate = document.querySelector('#endDate');
const numberTravelers = document.querySelector('#numberTravelers');
const destinationList = document.querySelector('#destinationList');
const submitButton = document.querySelector('#submitButton');
const tripInfo = document.querySelector('.trip-info');
const detailDestination = document.querySelector('.detail-destination');
const detailTotalCost = document.querySelector('.detail-total-cost');
const pendingTripBtn = document.querySelector('#pendingTripBtn');
const pastTripBtn = document.querySelector('#pastTripBtn');
const totalSpent = document.querySelector('.total-spent');
// const tripList = document.querySelector('.trip-list')

//EVENT LISTENERS
let userId = 3
// for login, invoke a function that finds the userId and pass that thru instead of the hardcoded

const renderDashboard = (userId) => {
  getAllFetches(userId)
  .then((allData) => {
    console.log(allData)
   let userTrips = filterTripsUser(userId, allData[1].trips)
   
   console.log(userTrips)
   renderTrips(userTrips, allData[2].destinations)
    //update dom functions
  })
}

window.addEventListener("load", renderDashboard(userId));





accountButton.addEventListener('click', function() {
  
  console.log('Account button clicked!');
});

submitButton.addEventListener('click', function() {
  
  console.log('Submit button clicked!');
});

pendingTripBtn.addEventListener('click', function() {
  //invoke a function which filters for pending status
  //invoke a fn which toggles the section to display 
  console.log('Pending Trip button clicked!');
});
//toggle function which 
pastTripBtn.addEventListener('click', function() {
  //invoke a function which filters for past trips
  //invoke a fn which toggles the section to display
  console.log('Past Trip button clicked!');
});




//access the individual user's trips for dashboard w harcoded user
//user
// {
//   "id": 3,
//   "name": "Sibby Dawidowitsch",
//   "travelerType": "shopper"
//   },
//trip
// {
  // "id": 3,
  // "userID": 3,
  // "destinationID": 22,
  // "travelers": 4,
  // "date": "2022/05/22",
  // "duration": 17,
  // "status": "approved",
  // "suggestedActivities": []
  // }
//destination
// {
//   "id": 22,
//   "destination": "Rome, Italy",
//   "estimatedLodgingCostPerDay": 90,
//   "estimatedFlightCostPerPerson": 650,
//   "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
//   "alt": "people standing inside a colosseum during the day"
//   }

//access the user name for the dashboard
//id : 1 and user: user.name
// filter all trips from the destination ids, find one object at a time and push the destinations into a separate array and then do a reduce to 
//filter and forEach user id and filter from there


//userID in the trip -> 
//    then use the destinationID to find the destination
//         and the destination also has its own id

/*

userNum = slice from the login input and pass it thru `traveler50`
const findUser = (userNum) => {
 let user = travelers.find( person => person.id === num)
  return user
}

interpolate each filter for the user's trips based on the userID property within trip

const filterUserTrips = (userNum) => {
  let userTrips = trips.filter(trip => trip.userID === userNum)
  return trips
}
//array of objs with destinationID
//global variable for the return of filterUserTrips to access the new array of trips for each user = trips

const findDestination = (destinationNum, trips) => {
  let destination = trips.find(trip => trip.destinationID = destinationNum)
  return destination
}


further filtering for pending, past and future, depend on the date

*/
