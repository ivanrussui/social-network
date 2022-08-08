import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(responce => {
        // debugger
        if (responce.data.resultCode === 0) {
          let {id, email, login} = responce.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  dialog1: state.dialogsPage.dialogs[0],
  id: state.auth.id,
  avatar: state.auth.avatar
});
// console.log(store.getState())
// debugger
export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
