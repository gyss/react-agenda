import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.css';

import { editContact } from '../../actions';

class ContactListItem extends Component {
  render() {
    const contact = this.props.contact;

    return (
      <div className="contact-list-item" onClick={this.props.onClick}>
        {contact.name}
      </div>
    );
  }
}

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(editContact(ownProps.contact));
    },
  };
}
const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
