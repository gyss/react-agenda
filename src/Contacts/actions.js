import * as types from './constants';

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
    type: types.LOAD_CONTACTS,
    payload: []
  };
}

export function updateContact() {
  return {
    type: types.UPDATE_CONTACT
  }
}

export function updateContactForm(contact) {
  return {
    type: types.UPDATE_CONTACT_FORM,
    payload: contact
  }
}

export function removeContact(contact) {
  return {
    type: types.REMOVE_CONTACT,
    payload: contact,
  };
}

export function editContact(contact) {
  return {
    type: types.EDIT_CONTACT,
    payload: contact,
  };
}

export function addContact() {
  return {
    type: types.ADD_CONTACT,
    payload: newContact(counter++),
  };
};