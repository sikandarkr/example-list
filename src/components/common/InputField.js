import React, { Component } from "react";

class InputField extends Component {
  render() {
    return (
      <div className="input-group mt-10">
        <input
          type="text"
          class="form-control signup-input-left"
          {...this.props}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    );
  }
}
export default InputField;
