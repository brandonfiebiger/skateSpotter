export const spotReducer = (state = 'hello', action) => {
  switch (action.type) {
    case 'ADD_SPOT':
      console.log('it works');
    default:
      return state;
  }
};
