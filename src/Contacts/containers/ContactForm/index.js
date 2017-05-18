import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

import { updateContact, updateContactForm } from '../../actions';

class ContactForm extends Component {
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" || target.type === "radio" ? target.checked : target.value;
    const name = target.name;
    this.props.updateContactForm(Object.assign({}, this.props.contactEdited, { [name]: value }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateContact();
  }

  render() {
    const contact = this.props.contactEdited;
    if (!contact) {
      return null;
    }

    return (
      <div className="contact-form">
        <form onSubmit={this.handleSubmit}>
          
            <div className="contact-form__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={contact.name} onChange={this.handleChange} placeholder="Jane Doe..." />
            </div>

            <div className="contact-form__field">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" type="text" value={contact.phone} onChange={this.handleChange} placeholder="075 41..." />
            </div>

            <div className="contact-form__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={contact.email} onChange={this.handleChange} placeholder="hello@react.com" />
            </div>

            <div className="contact-form__field">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" value={contact.address} onChange={this.handleChange} placeholder="77 Baker Street..." />
            </div>

            <button type="submit">Save</button> 
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    updateContactForm: (contact) => {
      dispatch(updateContactForm(contact));
    },
    updateContact: () => {
      dispatch(updateContact());
    }
  };
}



const mapStateToProps = (state, ownProps) => {
   return {
      contactEdited: state.contacts.contactEdited,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);