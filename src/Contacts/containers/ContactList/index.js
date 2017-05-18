import React, { Component } from 'react';

import ContactListItem from '../ContactListItem';

import './styles.css';

class ContactList extends Component {
  render() {
    return (
      <div>
        <ContactListItem></ContactListItem>
        <ContactListItem></ContactListItem>
        <ContactListItem></ContactListItem>
      </div>
    );
  }
}

export default ContactList;