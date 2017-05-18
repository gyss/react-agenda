import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  LOAD_CONTACTS,
  EDIT_CONTACT,
} from './constants';

const initialState = {
  loading: true,
  contactEditting: 0,
  list: [],
};

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return Object.assign({}, state, {
        list: [...state.list, action.payload] 
      });
    case EDIT_CONTACT:
      return Object.assign({}, state, {
        contactEditting: action.payload.id
      });
    case REMOVE_CONTACT:
      const index = state.list.findIndex(contact => contact.id === action.payload.id);
      return Object.assign({}, state, {
        list: [
          ...state.list.slice(0, index),
          ...state.list.slice(index + 1)
        ]
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