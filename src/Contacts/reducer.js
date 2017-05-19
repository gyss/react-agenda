import * as types from './constants';

const initialState = {
  loading: true,
  contactEdited: null,
  list: [],
};

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_CONTACT:
      return Object.assign({}, state, {
        list: [...state.list, action.payload] ,
        contactEdited: Object.assign({}, action.payload)
      });
    case types.EDIT_CONTACT:
      return Object.assign({}, state, {
        contactEdited: Object.assign({}, action.payload)
      });
    case types.UPDATE_CONTACT:
      const indx = state.list.findIndex(contact => contact.id === state.contactEdited.id);
      return Object.assign({}, state, {
        list: [
          ...state.list.slice(0, indx),
          Object.assign({}, state.contactEdited),
          ...state.list.slice(indx + 1)
        ]
      });
    case types.UPDATE_CONTACT_FORM:
      return Object.assign({}, state, {
        contactEdited: Object.assign({}, action.payload)
      });
    case types.REMOVE_CONTACT:
      const index = state.list.findIndex(contact => contact.id === action.payload.id);
      return Object.assign({}, state, {
        list: [
          ...state.list.slice(0, index),
          ...state.list.slice(index + 1)
        ],
        contactEdited: state.contactEdited && state.contactEdited.id === action.payload.id ? null : state.contactEdited
      });
    case types.LOAD_CONTACTS:
      return Object.assign({}, state, {
        loading: false,
        list: action.payload
      });
    default:
      return state;
  }
}

export default contactsReducer;