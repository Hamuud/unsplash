/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import cn from 'classnames';
import classes from './Pagination.module.scss';
import ScrollToTop from '../shared/ScrollToTop/ScrollToTop';

type Props = {
  currentPage: number;
  onChange: (newPage: number) => void;
};

const Pagination: React.FC<Props> = ({ currentPage, onChange }) => {
  const lastPage = 5;
  const pages = [];

  if (currentPage === 0) {
    return null;
  }

  // eslint-disable-next-line
  for (let i = 1; i <= lastPage; i++) {
    pages.push(i);
  }

  const NextPage = () => {
    ScrollToTop();
    onChange(currentPage + 1);
  };

  const PreviousPage = () => {
    ScrollToTop();
    onChange(currentPage - 1);
  };

  const PageByValue = (value: number) => {
    ScrollToTop();
    onChange(value);
  };

  const {
    pagination__button,
    'pagination__arrow--disabled': arrowDisabled,
    'pagination__button--active': buttonActive,
  } = classes;

  return (
    <div className={classes.pagination}>
      <button
        type="button"
        key={currentPage - 1}
        className={cn(pagination__button, {
          [arrowDisabled]: currentPage === 1,
        })}
        onClick={PreviousPage}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>
      <ul className={classes.list}>
        {pages.map((page) => {
          const isActive = currentPage === page;

          return (
            <li
              key={page}
              className={classes.list__item}
            >
              <button
                type="button"
                className={cn(pagination__button, {
                  [buttonActive]: isActive,
                })}
                onClick={() => PageByValue(page)}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        key={currentPage + 1}
        className={cn(pagination__button, {
          [arrowDisabled]: currentPage === lastPage,
        })}
        onClick={NextPage}
        disabled={currentPage === lastPage}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
