import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../logo.svg";
import plug from "../../assets/img/plug.png";
// import spider from '../../assets/img/spider-man.webp'
import Spinner from "../common/Spinner/Spinner";

const Header = (props) => {
    // console.log(props)
    // if (!props.profile) { // если в props profile нет или null или undefined
    //     return <Spinner/> // отображаем спиннер
    // }
    return (
        // { !props.profile ?
        // <Spinner/> :
        <header className={s.header}>
            <img
                src={logo}
                alt={"logo"}
            />


            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div>{props.getAuthLogoutThunk} <button onClick={props.getAuthLogoutThunk}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
// }
    );
};

export default Header;

// <div className={s.loginBlock}>
//   {/*<NavLink to={'/login'}>Login</NavLink>*/}
//   {props.isAuth ? `login: ${props.login} - id: ${props.id} - avatar:` : <NavLink to={'/login'}>Login</NavLink>}
//   {!props.avatar ? <img src={'https://avatars.mds.yandex.net/get-ott/1672343/2a00000169e7571b0993232db73c3cd072f8/678x380'} title={'Spider-Man'}/> : null}
//   {/*{ props.isAuth ? props.dialog1.name : <NavLink to={'/login'}>Login</NavLink> }*/}
// </div>