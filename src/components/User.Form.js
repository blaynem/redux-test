import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormSubmit from './Form.Submit';

class UserForm extends Component {
  renderMessage = () => {
    return (
      <div className="message-to-user">{this.props.message}</div>
    )
  }
  render() {
    return (
      <div className="form">
        <FormSubmit />
        {this.renderMessage()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return ({
    message: state.formData.message
  })
}

export default connect(mapStateToProps)(UserForm)