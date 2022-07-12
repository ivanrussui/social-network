import React from 'react';
import Profile from "./Profile";
import axios from "axios";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        // debugger;
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    // debugger;
    return  <Profile {...this.props} />
  }
}

export default ProfileContainer;
