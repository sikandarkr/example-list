import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profile from "./components/layout/Profile";
import Update from "../src/components/Profile/Update";
import "./App.css";
// localStorage.getItem('clicks')
class App extends Component {
  state = {
    isHidden: true
  };
  toggleHandler = e => {
    console.log("asdfklasldjkfhasl", e.target.className.split(" ")[0]);
    if (e.target.className.split(" ")[0] === "fa") {
      this.setState({
        isHidden: !this.state.isHidden
      });
    } else {
      this.setState({
        isHidden: true
      });
    }
  };
  render() {
    return (
      <div className="app-component">
        <Navbar
          isHidden={this.state.isHidden}
          onToggleHandler={this.toggleHandler}
        >
          <div onClick={this.toggleHandler}>
            {localStorage.getItem("Authorization") ? (
              <Switch>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/update" component={Update}/>
                <Redirect to="/Profile" />
              </Switch>
            ) : (
              <Switch>
                <Route exact path="/" component={Register} />
                <Route exact path="/login" component={Login} />
                
              </Switch>
            )}
          </div>
        </Navbar>
      </div>
    );
  }
}
export default App;
// <Route exact path="/profile" component={Profile} />
// <Route exact path="/register" component={Register} />
// <Route exact path="/login" component={Login} />
// How to use this.props.history with redux saga

// how to send history object to redux saga
// <Switch>
// {localStorage.getItem("webT") ? (
//   <Switch>
//     {/* <Route exact path="/login" component={Login} /> */}
//     <Route exact path="/profile" component={Profile} />
//     <Redirect to="/Profile" />
//   </Switch>
// ) : (
//   <Switch>
//     <Route exact path="/" component={Register} />
//     <Route exact path="/login" component={Login} />

//   </Switch>
// )}
// </Switch>
