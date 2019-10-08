import React, { Component } from 'react'

 class PasswordField  extends Component {
  render() {
    return (
      <div className="input-group mt-10">
        <input type="password" class="form-control signup-input-right" {...this.props}  aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
    )
  }
}
export default PasswordField;
