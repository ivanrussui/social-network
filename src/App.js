import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

// let path = ['/', '/profile/*', '/profile/:userId', '/dialogs/*', '/users' ]
// console.log(path[3])
// let paths = path.map(p => <Route path={index} element={<HeaderContainer />} />)
const App = () => {
    // debugger;
    return (
        <div className="app-wrapper">
            <Routes>
                <Route
                    path='/*'
                    element={<HeaderContainer/>}/>
                {/*<Route*/}
                {/*  path={path[0]}*/}
                {/*  element={<HeaderContainer />} />*/}
                {/*<Route*/}
                {/*  path={path[1]}*/}
                {/*  element={<HeaderContainer />} />*/}
                {/*<Route*/}
                {/*  path={path[0 || 1 || 2 || 3 || 4]}*/}
                {/*  // path={path[0 && 1 && 2 && 3 && 4]}*/}
                {/*  // path={`${path[0]}  ${path[1]}`}*/}
                {/*  element={<HeaderContainer />} />*/}
            </Routes>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route
                        path='/profile/*'
                        element={<ProfileContainer/>}/>
                    <Route
                        path='/profile/:userId'
                        element={<ProfileContainer/>}/>
                    <Route path="/dialogs/*"
                           element={<DialogsContainer/>}/>
                    <Route path="/users"
                           element={<UsersContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
