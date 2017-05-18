import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactListItem from '../ContactListItem';

class ContactList extends Component {
  render() {
    const { list, contactEdited } = this.props.contacts;
    const contactList = list.map(contact => <ContactListItem key={contact.id} contact={contact} selected={contactEdited && contactEdited.id === contact.id}></ContactListItem>);
    
    return (
      <div>
        {contactList}
      </div>
    );
  }
}

const mapDispatchToProps = null;
const mapStateToProps = (state, ownProps) => {
   return {
      contacts: state.contacts
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);