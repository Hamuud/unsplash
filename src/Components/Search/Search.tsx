import React from 'react';
import classes from './Search.module.scss';
import InputSearch from '../shared/InputSearch/InputSearch';

const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes.search__content}>
        <div>
          <h1 className={classes.search__title}>
            Unsplash
          </h1>
        </div>
        <div className={classes.search__description}>
          <p>
            The internet&apos;s source for visuals.
            <br />
            Powered by creators everywhere.
          </p>
        </div>
        <InputSearch />
      </div>
    </div>
  );
};

export default Search;
