import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import logo from "../../logo.svg";
// import plug from "../../assets/img/plug.png";
// import Spinner from "../common/Spinner/Spinner";

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
                {props.isAuth
                    ? <div>
                        <button onClick={props.getAuthLogoutThunk}>Logout</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
// }
    );
};

export default Header;
