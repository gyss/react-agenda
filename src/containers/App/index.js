import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import AddContactButton from '../../Contacts/containers/AddContactButton';
import ContactList from '../../Contacts/containers/ContactList';
import ContactForm from '../../Contacts/containers/ContactForm';
import { loadContacts } from '../../Contacts/actions';

import './styles.css';

class App extends Component {
  componentDidMount() {
    this.props.loadContacts();
  }

  render() {
    return (
      <div className="app">
        <Header>React Agenda 2017</Header>
        <div className="content">
          <Sidebar>
            <AddContactButton />
            <ContactList />
          </Sidebar>
          <div className="content-area">
            { !!this.props.contactEditting ? <ContactForm /> : <p>Click on "Add Contact" button to create a new contact.</p> }
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loadContacts: (evt) => {
      dispatch(loadContacts());
    },
  };
}
const mapStateToProps = (state, ownProps) => {
   return {
      contactEditting: state.contacts.contactEditting
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
