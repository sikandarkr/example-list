import React, { Component } from 'react'

 class InputFieldR  extends Component {
  render() {
    return (
      <div className="input-group mt-10">
        <input type="text" className="form-control signup-input-right" {...this.props}  aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
    )
  }
}
export default InputFieldR;
