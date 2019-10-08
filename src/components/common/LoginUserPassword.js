import React, { Component } from 'react'

 class LoginUserPassword  extends Component {
  render() {
    return (
      <div className="input-group mt-10">
        <input type="password" className="form-control left-10" {...this.props}  aria-label="password" aria-describedby="basic-addon1"/>
      </div>
    )
  }
}
export default LoginUserPassword;
