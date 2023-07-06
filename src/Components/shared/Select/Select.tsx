/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import classes from './Select.module.scss';
import { DropdownOption } from '../../../types/DropdownOption';

interface Props {
  options: DropdownOption[];
  selectedOption: DropdownOption;
  onChange: (newOption: DropdownOption) => void;
}

const Select: React.FC<Props> = ({
  options,
  selectedOption,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option: DropdownOption) => {
    onChange(option);

    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isClickedOutside = !ref.current?.contains(event.target as Node);

      if (isClickedOutside) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className={classes.select}>
      <button
        type="button"
        className={classes.select__button}
        onClick={handleToggle}
      >
        {selectedOption.label}
      </button>
      <ul
        className={cn(classes.select__list, {
          [classes['select__list--open']]: isOpen,
        })}
      >
        {options.map((option) => (
          <li
            key={option.value}
            className={classes.select__item}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
