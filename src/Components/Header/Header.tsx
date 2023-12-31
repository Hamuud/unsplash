import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import unsplashLogo from '../../img/Unsplash.svg';
import Input from '../shared/Input/Input';

const Header = () => {
  return (
    <div className={classes.section}>
      <header className={classes.header}>
        <div className={classes.container}>
          <div>
            <Link
              to="/"
              className={classes.img__container}
            >
              <img
                src={unsplashLogo}
                className={classes.img}
                alt="Unsplash home link"
              />
            </Link>
          </div>
        </div>
        <Input />
      </header>
    </div>
  );
};

export default Header;
