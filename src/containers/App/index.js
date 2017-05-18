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
            <AddContactButton></AddContactButton>
            <ContactList></ContactList>
          </Sidebar>
          <div>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadContacts: (evt) => {
      dispatch(loadContacts());
    },
  };
}
const mapStateToProps = null;
/*
const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});
*/

export default connect(mapStateToProps, mapDispatchToProps)(App);
