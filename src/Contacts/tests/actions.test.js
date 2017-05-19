import * as actions from '../actions';
import * as types from '../constants';
import { contacts } from './fixtures';

describe('Contact actions', () => {
  it('should create an action add contact', () => {
    const expectedAction = {
      type: types.ADD_CONTACT,
      payload: contacts['new-contact']
    };

    expect(actions.addContact()).toEqual(expectedAction);
  });

  it('should create an action edit contact', () => {
    const expectedAction = {
      type: types.EDIT_CONTACT,
      payload: contacts['jane']
    };

    expect(actions.editContact(contacts['jane'])).toEqual(expectedAction);
  });
});