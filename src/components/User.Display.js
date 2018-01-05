import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDisplay extends Component {
  renderNames = () => {
    const { formData } = this.props;

    return formData.data.map( (item, i) => {
      return (
        <p className="names" 
          key={`${item.firstName}${item.lastName}${i}`}>
          {item.firstName} {item.lastName}
        </p>
      )
    })
  }
  render() {
    return(
      <div className="user-display">
        {this.renderNames()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return ({
    formData: state.formData
  })
}

export default connect(mapStateToProps, {})(UserDisplay)