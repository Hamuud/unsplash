import React from 'react';
import classes from './InputSearch.module.scss';

const InputSearch = () => {
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

export default InputSearch;
