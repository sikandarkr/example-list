import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequest } from "../../store/AuthLogin/actions";
import LoginUserName from "../common/LoginUserName";
import LoginUserPassword from "../common/LoginUserPassword";
// import SweetAlert from 'sweetalert-react';
import swal from 'sweetalert';
// import swal from '@sweetalert/with-react';
import axios from 'axios';
import InputField from "../common/InputField";
var Modal = require("react-bootstrap-modal");
const SweetAlert = require('react-bootstrap-sweetalert');
class Update extends Component {
  state = {
    country: "",
    open: false,
    province:"",
    file:null,
    selectedCountry:'',
    selectedState:'',
    zipCode:'',
    number:'',
    dob:'',
    show:true
  };
  componentWillMount() {
    console.log("component will mount");
  }
  componentDidMount() {
    // https://www.freecodecamp.org/forum/t/react-question-cannot-read-property-setstate-of-undefined/69620/2
    //currentComponent explanation link
    let currentComponent = this;
    fetch("http://localhost:5000/users/country", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":"WeLBwoDvI72rHHhXsiT0"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(country) {
        //console.log(myJson);
        // console.log("your data from the server is....",JSON.stringify(myJson.results.state));
        currentComponent.setState({
          country: country.results
          //country:JSON.stringify(country.results),
        });
        // console.log("country list", currentComponent.state.country);
      });
  }
  onCountrySelect = (e) =>{
    this.setState({
      selectedCountry:e.target.options[e.target.selectedIndex].text
    })
  }
  onStateSelect = (e) =>{
    //console.log('selected state ...',e.target.options[e.target.selectedIndex].text);
    this.setState({
      selectedState:e.target.options[e.target.selectedIndex].text
    })
  }
 countryChange = (e) =>{
  let currentComponent = this;
  fetch(`http://localhost:5000/users/state?code=in`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "WeLBwoDvI72rHHhXsiT0"
    }
  }) .then(function(response) {
    return response.json();
  })
  .then(function(state) {
    currentComponent.setState({
      province:state.results
    })
    //console.log("######################### country changed...######################",currentComponent.state);
  });
 }
 onSelectFile =(e) =>{
  this.setState({file:e.target.files[0]});
  
 }
 handleChange =(e) =>{
    this.setState({[e.target.name]: e.target.value})
 }
 onFormSubmit=(e)=>{
  e.preventDefault();
  let self =this;
  let formData = new FormData();
  formData.append('country',this.state.selectedCountry);
  formData.append('state',this.state.selectedState);
  formData.append('zipCode',this.state.zipCode);
  formData.append('mobileNumber',this.state.number);
  formData.append('dob',this.state.dob);
  formData.append('image',this.state.file);
  const config = {
      headers: {
          'content-type': 'multipart/form-data',
          "x-api-key": "WeLBwoDvI72rHHhXsiT0",
          "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOWUxNjhkYTlmY2ZhMWY0YzlmYzc0YyIsImlhdCI6MTU1NTM4MTEzNCwiZXhwIjoxNTU1NDYwMzM0fQ.uJvDUM2mbWozQM-Q-av6LJr9JUJxZidn-6EVN7ePe_8"
      }
  };
  axios.post("http://localhost:5000/add/add_details",formData,config)
      .then((response) => {
        if(response.status==200){
          console.log("here is server response",response.status);
          swal({
            title: "Success",
            text: "Profile has been updated successfully",
            icon: "success",
            button: "Okay",
          });
          window.location.reload();
        } 
        else{
          console.log("there is some error");
        }
      }).catch((error) => {
        console.log(error);
  });
}
  render() {
    const country = this.state.country;
    const provinces = this.state.province;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-ml-4 col-xl-4 col-xs-4" />
          <form onSubmit={this.onFormSubmit}>
          <div className="col-md-4 col-ml-4 col-xl-4 col-xs-4  div-color">
            <div className="row top-10">
         
              <div className="col-md-12 col-xs-12 col-ml-12">
                <div className="form-group form-zone">
                  <InputField placeholder="Mobile Number" name="number" onChange={this.handleChange} required />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-xs-12 col-ml-12">
                <div className="form-group form-zone">
                  <InputField placeholder="Date of Birth" name="dob" onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-xs-12 col-ml-12">
                {/* <p>{this.state.country}</p> */}
                <div className="form-group form-zone" onChange ={this.countryChange}>
                  <select className="default-dropdown" onChange={this.onCountrySelect}>
                    {!!country &&
                      country.map((d, i) => (
                        <option value={d.codeList}>{d.countryList}</option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-xs-12 col-ml-12">
                <div className="form-group form-zone">
                  <select className="default-dropdown" onChange={this.onStateSelect}>
                    {!!provinces &&
                        provinces.states.map((item) => (
                        <option value = {item}>{item}</option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-xs-12 col-ml-12">
                <div className="form-group form-zone">
                  <InputField placeholder="Zipcode" name="zip"  onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-xs-12 col-ml-12">
                <div className="form-group form-zone ml-10">
                <input type="file" name="myImage" value ={this.state.image} onChange= {this.onSelectFile} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-xs-12 col-ml-12">
                <div className="form-group form-zone ">
                  <button
                    className="btn btn-default btn-choose btn-submit" 
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          </form>
          <div className="col-md-4 col-ml-4 col-xl-4 col-xs-4" />
        </div>
      </div>
    );
  }
}

export default Update;

//https://www.skptricks.com/2018/05/create-dropdown-using-reactjs.html
// {country.keys(country).map(function(name) {
//     return <div>Key: {key}</div>;
// })}

// this.state.country.codeList.map(data=>{
//     return <option value="Female">{data}</option>
// })
