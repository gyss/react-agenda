import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  LOAD_CONTACTS,
  EDIT_CONTACT,
} from './constants';

let counter = 1;

function newContact(contactId) {
  return  {
    id: contactId,
    name: `New contact (${contactId})`,
    phone: '',
  };
}

// TODO: Load contacts from server
export function loadContacts() {
  return {
    type: LOAD_CONTACTS,
    payload: []
  };
}

export function removeContact() {
  return {
    type: REMOVE_CONTACT,
  };
}

export function editContact(contact) {
  console.log('llelafg = ', contact);
  return {
    type: EDIT_CONTACT,
    payload: contact,
  };
}

export function addContact() {
  return {
    type: ADD_CONTACT,
    payload: newContact(counter++),
  };
};