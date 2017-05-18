import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.css';

import { editContact, removeContact } from '../../actions';

class ContactListItem extends Component {
  render() {
    const contact = this.props.contact;
    return (
      <div onClick={this.props.onSelect} 
          className={"contact-list-item " + (this.props.selected ? 'contact-list-item--selected' : '')}>
        <div>{contact.name}</div>
        <div className="contact-list-item__delete" onClick={this.props.onDelete}>X</div>
      </div>
    );
  }
}

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  selected: PropTypes.bool
};

ContactListItem.defaultProps = {
   selected: false
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onSelect: () => {
      dispatch(editContact(ownProps.contact));
    },
    onDelete: (evt) => {
      if (evt !== undefined && evt.stopPropagation) {
        evt.stopPropagation();
      }
      dispatch(removeContact(ownProps.contact));
    }
  };
}
const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
