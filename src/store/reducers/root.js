import { ADD_SPOT } from '../../actions/actionTypes'

const initialState = {
  message: 'hello'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SPOT:
      return {
        message: action.spot
      }
    default:
      return state;
  }
}


export default reducer;