import React, { Component } from 'react';
import { connect } from 'react-redux';

import { formSubmit } from '../actions'

class FormSubmit extends Component {
  state = {
    firstName: "",
    lastName: "",
    hobbies: ""
  }
  // handles the change of the form fields
  handleChange = (e) => {
    const { name, value } = e.target
    // takes the name of the field in order to select correct state
    // then sets the value of that fields name
    this.setState({ [name]: value })
  }
  // handles the submission of the form
  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = this.state
    this.props.formSubmit({ firstName, lastName })
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div>
          <span>First</span>
          <input
            onChange={this.handleChange}
            name="firstName"
            value={this.state.firstName} />
        </div>
        <div>
          <span>Last</span>
          <input
            onChange={this.handleChange}
            name="lastName"
            value={this.state.lastName} />
          </div>
        <div className="hobbies">
          <span>Hobbies</span>
          <input
            onChange={this.handleChange}
            name="hobbies"
            value={this.state.hobbies} />
          <button>Submit!</button>
        </div>
      </form>
    )
  }
}

export default connect(null, { formSubmit })(FormSubmit);