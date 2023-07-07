import React from 'react';
import classes from './ShareButton.module.scss';

type Props = {
  label: string;
  url: string;
};

const ShareButton: React.FC<Props> = ({ label, url }) => {
  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText(url)}
    >
      <div className={classes.button}>
        <div className={classes.button__icon} />
        {label}
      </div>
    </button>
  );
};

export default ShareButton;
