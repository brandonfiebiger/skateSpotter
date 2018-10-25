export const spotReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SPOT':
      return [...state, action.spot];
    default:
      return state;
  }
};
