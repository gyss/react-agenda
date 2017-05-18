import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  LOAD_CONTACTS
} from './constants';

const initialState = {
  loading: true,
  list: [],
};

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return Object.assign({}, state, {
        list: [...state.list, action.payload] 
      });
    case REMOVE_CONTACT:
      return Object.assign({}, state, {
        loading: false,
        list: action.payload
      });
    case LOAD_CONTACTS:
      return Object.assign({}, state, {
        loading: false,
        list: action.payload
      });
    default:
      return state;
  }
}

export default contactsReducer;