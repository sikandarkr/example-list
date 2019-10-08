import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequest } from "../../store/AuthLogin/actions";
import LoginUserName from "../common/LoginUserName";
import LoginUserPassword from "../common/LoginUserPassword";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleLogin = e => {
    e.preventDefault();
    const userKey = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginRequest(userKey);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-sm-6 col-xs-6 col-ml-6" />
          <div className="col-md-6 col-xl-6 col-sm-6 col-xs-6 col-ml-6">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-ml-12 col-xs-12">
                <div className="card sign-up-form">
                  <div className="card-header sign-up-form-header">
                    <p className="heading-text">Login</p>
                  </div>
                  <div className="card-body register-form">
                    <form onSubmit={this.handleLogin}>
                      <div className="row">
                        <div className="col-md-12 col-xs-12 col-ml-12 col-sm-12">
                          <LoginUserName
                            name="email"
                            placeholder="UserName"
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-xs-12 col-ml-12 col-sm-12">
                          <LoginUserPassword
                            placeholder="password"
                            name="password"
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div className="row m-top-10">
                        <div className="col-md-8 col-xs-8 col-ml-8 col-sm-8 m-left-7">
                          <button type="submit" class="btn  custom-submit">
                            SignIn
                          </button>
                        </div>
                        <div className="col-md-4 col-xs-4 col-ml-4 col-sm-4" />
                      </div>
                      <div className="row m-top-20" />
                    </form>
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
const mapDispatchToProps = dispatch => ({
  loginRequest: userData => dispatch(loginRequest(userData))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

//https://www.skptricks.com/2018/05/create-dropdown-using-reactjs.html
