import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import plug from "../../assets/img/plug.png";
import spider from '../../assets/img/spider-man.webp'
import Spinner from "../common/Spinner/Spinner";

const Header = (props) => {
// debugger
// console.log(props)

  if (!props.profile) { // если в props profile нет или null или undefined
    return <Spinner/> // отображаем спиннер
  }
  const photos = props.profile.photos.small;
  // const id = props.profile.id;
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt="logo"
      />


        <div className={s.loginBlock}>
          { photos ?
            <img src={photos} alt="Avatar"/> :
            <img src={plug} alt='Plug'/>
          }
          {/*{ id ?*/}
          {/*  <span>dfsdf</span> :*/}
          {/*  <span>dfsdf2</span>*/}
          {/*}*/}
        {/*{props.isAuth ? `login: ${props.login} - id: ${props.id} - avatar:` : <NavLink to={'/login'}>Login</NavLink>}*/}
        {/*//   {!props.avatar ? <img src={'https://avatars.mds.yandex.net/get-ott/1672343/2a00000169e7571b0993232db73c3cd072f8/678x380'} title={'Spider-Man'}/> : null}*/}
        </div>
    </header>
  );
};

export default Header;

// <div className={s.loginBlock}>
//   {/*<NavLink to={'/login'}>Login</NavLink>*/}
//   {props.isAuth ? `login: ${props.login} - id: ${props.id} - avatar:` : <NavLink to={'/login'}>Login</NavLink>}
//   {!props.avatar ? <img src={'https://avatars.mds.yandex.net/get-ott/1672343/2a00000169e7571b0993232db73c3cd072f8/678x380'} title={'Spider-Man'}/> : null}
//   {/*{ props.isAuth ? props.dialog1.name : <NavLink to={'/login'}>Login</NavLink> }*/}
// </div>