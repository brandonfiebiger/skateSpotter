export const locationReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return action.location;
    default:
      return state;
  }
};
