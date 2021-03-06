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
});

export const logout = () => ({
  type: 'LOG_OUT'
});

export const logIn = user => ({
  type: 'LOG_IN',
  user
})

