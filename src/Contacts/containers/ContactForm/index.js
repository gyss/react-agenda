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
    //console.log(this.state);
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
              <input id="name" name="name" type="text" value={contact.name} onChange={this.handleChange} placeholder="e.g.: Jane Doe" />
            </div>

            <div className="contact-form__field">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" type="text" value={contact.phone} onChange={this.handleChange} placeholder="075 41..." />
            </div>

            <button type="submit">Save</button> 
          
        </form>
      
{/* 
            <input name="title" type="text" value={this.state.value} onChange={this.handleChange} />

            <textarea name="description" value={this.state.value} onChange={this.handleChange} />

            <select name="fruit" value={this.state.value} onChange={this.handleChange}>
               <option value="grapefruit">Grapefruit</option>
               <option value="orange">Orange</option>
            </select>

            <input name="isGoing" type="checkbox" onChange={this.handleChange}
                 checked={this.state.isGoing} />

            <input type="submit" value="Submit" />
*/}           

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