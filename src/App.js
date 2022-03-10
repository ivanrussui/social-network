import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import {updateNewPostText} from './redux/state';

const App = (props) => {
  // debugger;
  return (

    <div className="app-wrapper">
      <Header/>
      <Navbar state={props.appState.sidebar}/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile"
                 element={<Profile profilePage={props.appState.profilePage}
                                   addPost={props.addPost}
                                   updateNewPostText={props.updateNewPostText}
                 />}/>
          <Route path="/dialogs/*"
                 element={<Dialogs dialogsPage={props.appState.dialogsPage}
                                   addMessage={props.addMessage}
                 />}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
    </div>

  );
};

export default App;
