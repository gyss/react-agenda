import reducer from '../reducer';
import * as types from '../constants';
import { contacts } from './fixtures';

describe('Contacts reducer', () => {

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      loading: true,
      contactEdited: null,
      list: [],
    });
  });

  it('should handle ADD_CONTACT', () => {
    expect(
      reducer({
        loading: false,
        contactEdited: {},
        list: [],
      }, {
        type: types.ADD_CONTACT,
        payload: contacts['new-contact']
      })
    ).toEqual(
      {
        loading: false,
        contactEdited: contacts['new-contact'],
        list: [
          contacts['new-contact']
        ],
      }
    );
  });
  
  it('should handle EDIT_CONTACT', () => {
    expect(
      reducer({
        loading: false,
        contactEdited: {},
        list: [
          contacts['jane'],
          contacts['alfred']
        ],
      }, {
        type: types.EDIT_CONTACT,
        payload: contacts['jane']
      })
    ).toEqual(
      {
        loading: false,
        contactEdited: contacts['jane'],
        list: [
          contacts['jane'],
          contacts['alfred']
        ],
      }
    );
  });

})