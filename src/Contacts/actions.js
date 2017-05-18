import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  UPDATE_CONTACT_FORM,
  UPDATE_CONTACT,
  LOAD_CONTACTS,
  EDIT_CONTACT,
} from './constants';

let counter = 1;

function newContact(contactId) {
  return  {
    id: contactId,
    name: `New contact (${contactId})`,
    phone: '',
    address: '',
    email: '',
  };
}

// TODO: Load contacts from server
export function loadContacts() {
  return {
    type: LOAD_CONTACTS,
    payload: []
  };
}

export function updateContact() {
  console.log('asdasd');
  return {
    type: UPDATE_CONTACT
  }
}

export function updateContactForm(contact) {
  return {
    type: UPDATE_CONTACT_FORM,
    payload: contact
  }
}

export function removeContact(contact) {
  return {
    type: REMOVE_CONTACT,
    payload: contact,
  };
}

export function editContact(contact) {
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