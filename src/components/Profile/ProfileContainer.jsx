import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileActionCreator} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        // debugger;
        this.props.setUserProfileActionCreator(response.data);
      });
  }

  render() {
    // debugger;
    return  <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({ // когда функ возвр объект мы должны ставить ( ) скобки а потом { }
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfileActionCreator})(ProfileContainer);
