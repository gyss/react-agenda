import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

import { addContact } from '../../actions';

class AddContactButton extends Component {
  render() {
    return (
      <div className="add-contact-button">
        <button type="button" onClick={this.props.onButtonClicked}>Add Contact</button> 
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    onButtonClicked: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
          evt.preventDefault();
      }
      dispatch(addContact());
    },
  };
}
const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AddContactButton);