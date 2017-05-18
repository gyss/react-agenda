import {
  LOAD,
} from './constants';

// The initial state of the App
const initialState = {
  loading: true,
  error: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return Object.assign({}, state, {
        loading: false
      });
    default:
      return state;
  }
}

export default appReducer;