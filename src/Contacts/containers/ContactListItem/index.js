import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.css';

import { editContact, removeContact } from '../../actions';

class ContactListItem extends Component {
  render() {
    const contact = this.props.contact;

    return (
      <div className="contact-list-item">
        <div onClick={this.props.onSelect}>{contact.name}</div>
        <div className="contact-list-item__delete" onClick={this.props.onDelete}>X</div>
      </div>
    );
  }
}

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onSelect: () => {
      dispatch(editContact(ownProps.contact));
    },
    onDelete: () => {
      dispatch(removeContact(ownProps.contact));
    }
  };
}
const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
