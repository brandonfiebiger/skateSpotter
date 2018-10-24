import { ADD_SPOT } from '../../actions/actionTypes'

const initialState = {
  message: 'hello'
}

const spotReducer = (state = 'hello', action) => {
  switch (action.type) {
    case ADD_SPOT:
      console.log('it works');
    default:
      return state;
  }
}


export default spotReducer;