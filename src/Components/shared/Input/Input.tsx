import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import classes from './Input.module.scss';
import { getSearchParams } from '../../../utils/get-search-params';
import { getImagesByPageAndSearch } from '../../../api/photo.api';

const Input = () => {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get('query') || '';
  const page = searchParams.get('page') || '1';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await getImagesByPageAndSearch(query, Number(page));

      if (query !== search) {
        setSearchParams(getSearchParams(
          searchParams,
          { query: search || null },
        ));
      }

      navigate(`/search?query=${search}`);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  useEffect(() => {
    return (() => {
      getSearchParams(searchParams, { query: null });
    });
  }, [searchParams]);

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className={classes.input}
        placeholder="Search high-resolution images"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
    </form>
  );
};

export default Input;
