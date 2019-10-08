import React, { Component } from 'react'

 class LoginUserName  extends Component {
  render() {
    return (
      <div className="input-group mt-10">
        <input type="text" className="form-control left-10" {...this.props}  aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
    )
  }
}
export default LoginUserName;
