export const spotReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_SPOTS':
      return [...action.spots]
    case 'ADD_SPOT':
      return [...state, action.spot];
    default:
      return state;
  }
};
