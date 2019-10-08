import React from "react";
import {
  Route,
  Switch,
  hashHistory,
  BrowserRouter as Router
} from "react-router-dom";
import { Redirect, withRouter } from "react-router";
import Login from "../Auth/Login";
import SearchBox from "../common/SearchBox";
import { push } from "connected-react-router";
import globe from "../../img/globe.png";
import profile from "../../img/profile.png";
class Navbar extends React.Component {
  state = {
    isHidden: true
  };
  switchAuth =(e) =>{
    this.props.history.push("/profile");
  }
  toggleHandler = e => {
    console.log("asdfjlkasjdfkjlhasjfyhqweufhbxm", e);
    this.setState({
      isHidden: !this.state.isHidden
    });
  };
  logoutHandler = e => {
    // debugger;
    localStorage.removeItem("Authorization");
    this.props.history.push("/login");
  };
  updateProfile = e =>{
    this.props.history.push("/update");
  }
  render() {
    const isTrue = localStorage.getItem("isTrue", false);
    //const isTrue = false;

    console.log("asdfklaesfkhas", this.props);
    return (
      <div onClick={this.props.onToggleHandler}>
        {isTrue ? (
          <div className="container top-nav">
            <div className="row">
              <div className="col-md-10 col-xl-10 col-ml-10 col-xs-10">
                <div className="header-left">
                  <div>
                    <img className="user-profile" src={globe} alt="df" />
                  </div>

                  <div className="search">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search"
                    />
                    <button type="button" className="btn">
                      <i className="fa fa-search-plus" />
                    </button>
                  </div>
                  <button type="button" className="profile-button" onClick={this.switchAuth}>
                    <img className="profile-icon" src={globe} alt="df" />{" "}
                    Sikandar{" "}
                  </button>
                  <div className="notification">
                    <i className="fa fa-bell" />
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xl-2 col-ml-2 col-xs-2">
                <div className="header-right">
                  <p>
                    <i
                      className="fa fa-sort-down"
                      onClick={this.props.onToggleHandler}
                    />
                  </p>
                  {!this.props.isHidden && (
                    <Child 
                      logoutHandler={this.logoutHandler} 
                      updateProfile={this.updateProfile}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container top-nav">
            <div className="row">
              <div className="col-md-10 col-xl-10 col-ml-10 col-xs-10">
                <div className="header-left">
                  <img className="no-auth-img" src={globe} alt="df" />
                </div>
              </div>
              <div className="col-md-2 col-xl-2 col-ml-2 col-xs-2" />
            </div>
          </div>
        )}

        <div>{this.props.children}</div>
      </div>
    );
  }
}
const Child = props => {
  return (
    <div>
      <ul className="profile_dropdown">
        <li>
          <i className="fa fa-briefcase m-left" />
          Jobs
        </li>
        <li  onClick={props.updateProfile}>
          <i className="fa fa-edit m-left" />
          Update Profile
        </li>
        <li onClick={props.logoutHandler}>
          <i className="fa fa-sign-out m-left" />
          Logout
        </li>
      </ul>
    </div>
  );
};
export default withRouter(Navbar);

// <SearchBox placeholder="Search User"/>
