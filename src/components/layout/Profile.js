import React, { Component } from "react";
import { connect } from "react-redux";
import profile from "../../img/profile.png";
import { profileRequest } from "../../store/AuthProfile/actions";
class Profile extends Component {
  componentDidMount() {
    this.props.profileRequest();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 card-background">
            <div className="col-md-12">
                <img className="card-profile" src={profile} alt="df" />
            </div>
            <div className="col-md-12">
              <div className="profile-info">
                  <p>{profile.data}</p>
              </div>
            </div>
            
          </div> 
          <div className="col-md-5 card-background">
          <h1>Kumar</h1>
          </div> 
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
    profile: state.profileReducer
  });
  const mapDispatchToProps = function(dispatch) {
    return {
      profileRequest: function(userData) {
        dispatch(profileRequest(userData));
      } };
    };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

