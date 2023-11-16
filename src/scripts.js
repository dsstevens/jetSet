import './css/styles.css';
import { getAllFetches, postnewTrip } from "./apiCalls"
import { renderTrips, dropdownDestinations, displayMoneySpent, setErrorMessage, displayEstimatedDestination, displayEstimatedCost, resetSelections, totalSpent } from "./DOMupdates"
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
export const detailDestination = document.querySelector('.detail-destination');
export const detailTotalCost = document.querySelector('.detail-total-cost');
export const detailImage = document.querySelector('.detail-image');

const pendingTripBtn = document.querySelector('#pendingTripBtn');
const pastTripBtn = document.querySelector('#pastTripBtn');
const mainLogin = document.querySelector('.main-login')
const dashboardView = document.querySelector('.dashboard-view')
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password')
const signIn = document.querySelector('#signIn')
const errorMsgDisplay = document.querySelector('#errorMsgDisplay')

//GLOBAL VARIABLES
export let allTravelers
export let allTrips
export let allDestinations
export let userTrips

let userId = null
let trip = {}

//LOGIN FNS

export const loginUser = (event) => {
  event.preventDefault()
  const userIdMatch = usernameInput.value.match(/^traveler(\d+)$/)
  console.log(userIdMatch)
  if (!userIdMatch) {
    setErrorMessage("Invalid username format.", errorMsgDisplay)
    return
  }
  if (passwordInput.value !== "travel") {
    setErrorMessage("Invalid Password", errorMsgDisplay)
    return;
  }
  const loggedInUserID = parseInt(userIdMatch[1])
    userId = loggedInUserID

  if (loggedInUserID < 1 || loggedInUserID > 50) {
    setErrorMessage("Invalid username. Use 'traveler' and a number between 1 and 50.'", errorMsgDisplay)
    return
  }
  mainLogin.hidden = true
  dashboardView.hidden = false

  renderDashboard(userId)
};

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
    // getAllFetches(userId)
  }
} 

//EVENT LISTENERS

signIn.addEventListener('click', function(event) {
  event.preventDefault();
    loginUser(event)
  
  //welcomeMessage.innerText += `${user.name}
  
  console.log('Sign in button clicked!');
});

logoutButton.addEventListener('click', function(event) {
  dashboardView.hidden = true
  mainLogin.hidden = false
  userId = null
  // renderDashboard(userId)
  resetSelections(event)
  // totalSpent.innerText = ''
  console.log('logout button clicked!');
});

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

submitButton.addEventListener('click', function(event) {
  console.log('Submit button clicked!')
  postTrip(event)
  resetSelections(event)
})



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
