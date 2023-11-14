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
  .then(response => {
    if(response.ok) {
      //add the new trip to user trips in api
      //renderDashboard(userId)
      return response.json();
    } else {
       // FORM HAS MISSING INFO
       if (response.status === 422) {
        throw new Error('The form is missing 1 or more pieces of information.');
      // NETWORK ERROR
    } else if (response.status >= 500) {
      throw new Error(
      `There has been a network error: ${response.status} ${response.statusText}. Please refresh the page or try again later.`,
      );
    } else {
      // ALL OTHER ERRORS
      throw new Error(
        `There has been an error: ${response.status} ${response.statusText}`,
      );
    }
    }
  })
  .catch(error => console.error('Error:', error));
};



