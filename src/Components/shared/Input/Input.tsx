import React from 'react';
import classes from './Input.module.scss';

const Input = () => {
  return (
    <form className={classes.form}>
      <input
        type="search"
        className={classes.input}
        placeholder="Search high-resolution images"
      />
    </form>
  );
};

export default Input;
