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

export const postnewTrip = (tripAPI, data) => {
  return fetch(`http://localhost:3001/api/v1/${tripAPI}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error));
};



