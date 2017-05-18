import { combineReducers } from 'redux';

import contactsReducer from './Contacts/reducer';

export default function createReducer() {
  return combineReducers({
    contacts: contactsReducer,
  });
}