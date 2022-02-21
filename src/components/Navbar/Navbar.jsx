import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';


const Navbar = (props) => {
  // debugger;
// console.log(props.state)
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
      </div>
      <div>
        <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
      </div>
      <div className={s.settings}>
        <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
      </div>
      <div className={s.friends}>
        {/*<NavLink to="/friends" className={navData => navData.isActive ? s.active : s.item}>Friends</NavLink>*/}
        <Friends friends={props.state.friends} />
      </div>
    </nav>
  );
};

export default Navbar;
