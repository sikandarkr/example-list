import React, { Component } from "react";
import InputField from "../common/InputField";
class AuthProfile extends Component {
  componentWillMount() {
    console.log("component will mount");
  }
  componentDidMount() {
    
  }
 handleChange =(e) =>{
    this.setState({[e.target.name]: e.target.value})
 }
  render() {
    return (
      <div className="container">
        <p>Hiiii</p>
      </div>
    );
  }
}
export default AuthProfile;

