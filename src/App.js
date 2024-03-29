import React, { lazy, Suspense } from 'react';
import {
    Routes,
    Route,
    useLocation,
    useNavigate,
    Navigate,
    useParams,
    BrowserRouter,
    HashRouter
} from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializedAppThunk } from './redux/appReducer';
import Spinner from './components/common/Spinner/Spinner';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from "./components/Header/HeaderContainer";
import store from './redux/reduxStore';
import './App.css';

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const News = lazy(() => import('./components/News/News'));
const Music = lazy(() => import('./components/Music/Music'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const LoginPage = lazy(() => import('./components/Login/Login'));

class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert('Some error occurred');
    };

    componentDidMount() {
        this.props.initializedAppThunk();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    };

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    };

    render() {
        if (!this.props.initialized) {
            return <Spinner/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path='/' element={<Navigate to={'/profile'} />} />
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path="/dialogs" element={<DialogsContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="*" element={<h1 style={{color: 'indigo'}}>404 NOT FOUND</h1>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
    // authorizedProfileId: state.auth.id,
    // isAuth: state.auth.isAuth
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

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializedAppThunk})
)(App);

const SamuraiJSApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
};

export default SamuraiJSApp;
