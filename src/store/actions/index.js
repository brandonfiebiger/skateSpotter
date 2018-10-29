export const addSpot = spot => ({
  type: 'ADD_SPOT',
  spot
});

export const getUserLocation = location => ({
  type: 'GET_LOCATION',
  location
});

export const populateSpots = spots => ({
  type: 'POPULATE_SPOTS',
  spots
})
