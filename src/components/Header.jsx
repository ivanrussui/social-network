import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://logojinni.com/ru/image/logos/react-446.svg"
        alt="logo"
      />
    </header>
  );
};

export default Header;
