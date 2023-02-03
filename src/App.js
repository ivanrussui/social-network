import React from 'react';
import './App.css';
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import LoginPage from "./components/Login/Login";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect } from 'react-redux';
import { getProfileThunk } from './redux/profileReducer';
import { getAuthMeThunk } from './redux/authReducer';
import { compose } from 'redux';

class App extends React.Component {
    componentDidMount() {
        // let profileId = this.props.router.params.userId;
        // if (!profileId) {
        //     profileId = this.props.authorizedProfileId;
        //     // profileId = 25141 // мой id
        //     // profileId = 2  //  Димыча
        // }

        this.props.getAuthMeThunk();
        // this.props.getAuthMeThunk(profileId);
        // this.props.getProfileThunk(profileId);
    }
    render() {
        return (
            <div className="app-wrapper">
                <Routes>
                    <Route path='/*' element={<HeaderContainer/>}/>
                </Routes>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/*' element={<ProfileContainer/>}/>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    authorizedProfileId: state.auth.id,
    isAuth: state.auth.isAuth
})

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{location, navigate, params}}/>
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getProfileThunk, getAuthMeThunk}))(App);
