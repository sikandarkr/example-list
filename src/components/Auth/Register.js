import React, { Component } from "react";
import InputField from "../common/InputField";
import { connect } from "react-redux";
import { registerRequest } from "../../store/AuthRegister/actions";
import InputFieldR from "../common/InputFieldR";
import PasswordField from "../common/PasswordField";
class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "male",
    fields: {},
    errors: {}
  };
  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleValidation = e => {
    let fields = this.state;
    let errors = {};
    let formIsValid = true;
    if (!fields.firstName) {
      formIsValid = false;
      errors["firstname"] = "firstName is required";
    }
    if (!fields.lastName) {
      formIsValid = false;
      errors["lastname"] = "Lastname is required";
    }
    if (!fields.email) {
      formIsValid = false;
      errors["emailaddress"] = "Email Address is required";
    }
    if (!fields.password) {
      formIsValid = false;
      errors["password"] = "Password is required";
    }
    this.setState({ errors: errors });
    return formIsValid;
  };
  // handleGender = e => {
  //   console.log(e);
  //   this.setState({ gender: e });
  // };
  ChangeSelect = e => {
    console.log(e.target.value);
    this.setState({ gender: e.target.value });
  };
  onInput = e => {
    e.preventDefault();
    let errors = {};
    var input_name = [e.target.name];
    if (input_name == "firstName") {
      this.setState({ errors: "" });
    }
    if (input_name == "lastName") {
      this.setState({ errors: "" });
    }
    if (input_name == "email") {
      this.setState({ errors: "" });
    }
    if (input_name == "password") {
      this.setState({ errors: "" });
    }
  };
  handleRegister(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      const newUser = {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        gender: this.state.gender
      };
      console.log(newUser);
      this.props.registerRequest(newUser);
    }
  }
  render() {
    const { auth } = this.props;
    console.log(
      "validation error",
      auth.error ? auth.error.data.message : null
    );
    var errorMessage = auth.error ? auth.error.data.message : null;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-sm-6 col-xs-6 col-ml-6" />
          <div className="col-md-6 col-xl-6 col-sm-6 col-xs-6 col-ml-6">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-ml-12 col-xs-12">
                <div className="card sign-up-form">
                  <div className="card-header sign-up-form-header">
                    <p className="heading-text">SignUp</p>
                  </div>
                  <div className="card-body register-form ">
                    <form onSubmit={this.handleRegister}>
                      <div className="row">
                        <div className="col-md-6 col-xs-6 col-ml-6 col-sm-6">
                          <InputField
                            placeholder="firstName"
                            name="firstName"
                            onChange={this.onChange}
                            onMouseEnter={this.onInput}
                            value={this.state.fields["firstname"]}
                          />
                          <span
                            className="existing_email"
                            style={{ color: "red" }}
                          >
                            {this.state.errors["firstname"]}
                          </span>
                        </div>
                        <div className="col-md-6 col-xs-6 col-ml-6 col-sm-6">
                          <InputFieldR
                            placeholder="lastName"
                            name="lastName"
                            value={this.state.fields["lastname"]}
                            onChange={this.onChange}
                            onMouseEnter={this.onInput}
                          />
                          <span
                            className="existing_email"
                            style={{ color: "red" }}
                          >
                            {this.state.errors["lastname"]}
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-xs-6 col-ml-6 col-sm-6">
                          <InputField
                            placeholder="emailAddress"
                            name="email"
                            value={this.state.fields["emailaddress"]}
                            onChange={this.onChange}
                            onMouseEnter={this.onInput}
                          />
                          {/* <p className="existing_email">{errorMessage}</p> */}
                          <span
                            className="existing_email"
                            style={{ color: "red" }}
                          >
                            {this.state.errors["emailaddress"]} {errorMessage}
                          </span>
                        </div>
                        <div className="col-md-6 col-xs-6 col-ml-6 col-sm-6">
                          <PasswordField
                            placeholder="password"
                            name="password"
                            value={this.state.fields["password"]}
                            onChange={this.onChange}
                            onMouseEnter={this.onInput}
                          />
                          <span
                            className="existing_email"
                            style={{ color: "red" }}
                          >
                            {this.state.errors["password"]}
                          </span>
                        </div>
                      </div>
                      <div className="row m-top-10">
                        <div className="col-md-6 col-xs-6 col-ml-6 col-sm-6">
                          <select
                            onChange={this.ChangeSelect}
                            value={this.state.gender}
                            className="default-dropdown"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="col-md-6 col-xs-6 col-ml-6 col-sm-6" />
                      </div>
                      <div className="row m-top-10">
                        <div className="col-md-8 col-xs-8 col-ml-8 col-sm-8 m-left-5">
                          <button
                            type="submit"
                            class="btn  custom-submit"
                            onClick={e => this.handleRegister(e)}
                          >
                            SignUp
                          </button>
                        </div>
                        <div className="col-md-4 col-xs-4 col-ml-4 col-sm-4" />
                      </div>
                    </form>
                    <div class="row m-top-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.authReducer
});
const mapDispatchToProps = function(dispatch) {
  return {
    registerRequest: function(userData) {
      dispatch(registerRequest(userData));
    }

    //userData => dispatch(registerRequest(userData))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

//https://www.skptricks.com/2018/05/create-dropdown-using-reactjs.html
