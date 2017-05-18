import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  UPDATE_CONTACT,
  UPDATE_CONTACT_FORM,
  LOAD_CONTACTS,
  EDIT_CONTACT,
} from './constants';

const initialState = {
  loading: true,
  contactEdited: null,
  list: [],
};

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return Object.assign({}, state, {
        list: [...state.list, action.payload] ,
        contactEdited: Object.assign({}, action.payload)
      });
    case EDIT_CONTACT:
      return Object.assign({}, state, {
        contactEdited: Object.assign({}, action.payload)
      });
    case UPDATE_CONTACT:
      const indx = state.list.findIndex(contact => contact.id === state.contactEdited.id);
      return Object.assign({}, state, {
        list: [
          ...state.list.slice(0, indx),
          Object.assign({}, state.contactEdited),
          ...state.list.slice(indx + 1)
        ]
      });
    case UPDATE_CONTACT_FORM:
      return Object.assign({}, state, {
        contactEdited: Object.assign({}, action.payload)
      });
    case REMOVE_CONTACT:
      const index = state.list.findIndex(contact => contact.id === action.payload.id);
      return Object.assign({}, state, {
        list: [
          ...state.list.slice(0, index),
          ...state.list.slice(index + 1)
        ],
        contactEdited: state.contactEdited && state.contactEdited.id === action.payload.id ? null : state.contactEdited
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