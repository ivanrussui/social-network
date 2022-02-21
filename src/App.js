import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
// debugger
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar state={props.appState.sidebar} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile"
                   element={<Profile state={props.appState.profilePage}/>}/>
            <Route path="/dialogs/*"
                   element={<Dialogs state={props.appState.dialogsPage}/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
