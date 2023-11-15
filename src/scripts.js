import './css/styles.css';
import { getAllFetches, postnewTrip } from "./apiCalls"
import { renderTrips, dropdownDestinations, displayMoneySpent, setErrorMessage, displayEstimatedDestination, displayEstimatedCost, resetSelections } from "./DOMupdates"
import { filterTripsUser, filterYearlyTrips, createTrip, estimateTripCost} from "./utils"

//QUERY SELECTORS:
const welcomeMessage = document.querySelector('.welcome-message');
const logoutButton = document.querySelector('#logoutButton');
export const startDate = document.querySelector('#startDate');
export const endDate = document.querySelector('#endDate');
export const numberTravelers = document.querySelector('#numberTravelers');
export const destinationList = document.querySelector('#destinationList');
const submitButton = document.querySelector('#submitButton');
const formError = document.querySelector('#formError')
// const tripInfo = document.querySelector('.trip-info');
export const detailDestination = document.querySelector('.detail-destination');
export const detailTotalCost = document.querySelector('.detail-total-cost');
export const detailImage = document.querySelector('.detail-image');
const pendingTripBtn = document.querySelector('#pendingTripBtn');
const pastTripBtn = document.querySelector('#pastTripBtn');
// const totalSpent = document.querySelector('.total-spent');
// const tripList = document.querySelector('.trip-list')
// const mainLogin = document.querySelector('.main-login')
// const dashboardView = document.querySelector('.dashboard-view')
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password')
const signIn = document.querySelector('#signIn')
const errorMsgDisplay = document.querySelector('#errorMsgDisplay')

//GLOBAL VARIABLES
export let currentTraveler
export let allTravelers
export let allTrips
export let allDestinations
export let userTrips
//do i need to export these?
//not using currentTraveler yet::: login

let userId = 3
let trip = {}

//LOGIN FNS

/*
//Login hot tips
//create a fn gets the userID
// div has a hidden attribute
//user name and pass and error handling for valid username w .includes(traveler and num 1-50)
//.trim error handling

//login button will change the login view as hidden, 
    reassign userId within the eventlistener 
        then invoke renderDashboard

regExpression also an option 

userNum = slice from the login input and pass it thru `traveler50`
const findUser = (userNum) => {
 let user = travelers.find( person => person.id === num)
  return user
}

interpolate each filter for the user's trips based on the userID property within trip


*/

//DASHBOARD FNS

const renderDashboard = (userId) => {
  getAllFetches(userId)
  .then((allData) => {
    console.log(allData)
    allTravelers = allData[0].travelers
    allTrips = allData[1].trips
    allDestinations = allData[2].destinations
    //welcome message dom fn
    userTrips = filterTripsUser(userId, allTrips)
    console.log(userTrips)
    filterYearlyTrips(userTrips)
    displayMoneySpent(userTrips, allDestinations)
    renderTrips(userTrips, allDestinations)
    dropdownDestinations(allDestinations)
    //update dom functions
  })
}

const postTrip = (event) => {
  event.preventDefault();
  if (!startDate.value || !endDate.value) {
    setErrorMessage("Please complete all fields",formError)
  } else if (!numberTravelers.value.length) {
    setErrorMessage("Please enter number of Travelers", formError)
  } else if (!destinationList.value.length) {
    setErrorMessage("Please choose a destination", formError)
  } else {
    let newTrip = createTrip(trip)
    console.log(newTrip)
    postnewTrip(newTrip)
    getAllFetches(userId)
  }
} 

//EVENT LISTENERS

signIn.addEventListener('click', function(event) {
  event.preventDefault();
  if (!usernameInput.value.length) {
    setErrorMessage("Please enter a valid username", errorMsgDisplay)
  } else if (!passwordInput.value.length) {
    setErrorMessage("Please enter your password", errorMsgDisplay)
  } else {
  // userId = currentTraveler.id
  // signIn.classList.remove("disabled")
  // mainLogin.classList.add("hidden");
  // dashboardView.classList.remove("hidden"); class="hidden" <-- add to line 35 html
  //welcomeMessage.innerText += `${currentTraveler.name}
  }
  console.log('Sign in button clicked!');
});

logoutButton.addEventListener('click', function() {
  // mainLogin.classList.remove("hidden");
  // dashboardView.classList.add("hidden"); class="hidden" <-- add to line 35 html
  console.log('Account button clicked!');
});


window.addEventListener("load", renderDashboard(userId));
//will change renderDashboard to on login click, won't have a window listener

submitButton.addEventListener('click', function(event) {
  console.log('Submit button clicked!')
  postTrip(event)
  resetSelections(event)
})

estimateTripButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (!startDate.value || !endDate.value) {
    setErrorMessage("Please complete all fields", formError)
  } else if (!numberTravelers.value.length) {
    setErrorMessage("Please enter number of Travelers", formError)
  } else if (!destinationList.value.length) {
    setErrorMessage("Please choose a destination", formError)
  } else {
    let tripPreview = createTrip(trip)
    estimateTripCost(tripPreview, allDestinations)
    console.log(tripPreview)
    displayEstimatedDestination(tripPreview, allDestinations) 
    displayEstimatedCost(tripPreview, allDestinations)
    console.log('Estimate button clicked!');
  }
});


//refactor:: toggle function 
pendingTripBtn.addEventListener('click', function() {
  //invoke a function which filters for pending status
  //invoke a fn which toggles the section to display 
  console.log('Pending Trip button clicked!');
});
pastTripBtn.addEventListener('click', function() {
  //invoke a function which filters for past trips
  //invoke a fn which toggles the section to display
  console.log('Past Trip button clicked!');
});
