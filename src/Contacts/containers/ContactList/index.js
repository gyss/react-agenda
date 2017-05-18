import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactListItem from '../ContactListItem';

import './styles.css';

class ContactList extends Component {
  render() {
    const list = this.props.contacts.map(contact => <ContactListItem key={contact.id} contact={contact}></ContactListItem>);
    
    return (
      <div>
        {list}
      </div>
    );
  }
}

const mapDispatchToProps = null;
const mapStateToProps = (state, ownProps) => {
   return {
      contacts: state.contacts.list
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);