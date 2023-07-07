import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { SearchType } from '../../types/SearchType';
import { getImagesByPageAndSearch } from '../../api/photo.api';
import Gallery from '../../Components/Gallery/Gallery';
import { DropdownOption } from '../../types/DropdownOption';
import classes from './SearchPage.module.scss';
import Select from '../../Components/shared/Select/Select';
import Pagination from '../../Components/Pagination/Pagination';
import { SearchType } from '../../types/SearchType';

const COUNT_OPTIONS = [
  { value: 3, label: '3' },
  { value: 5, label: '5' },
];

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [photos, setPhotos] = useState<SearchType | null>(null);
  const [column, setColumn] = useState(COUNT_OPTIONS[0]);
  const [page, setPage] = useState(1);

  const loadPhotos = async () => {
    try {
      const searchPhoto = await getImagesByPageAndSearch(query, page);

      setPhotos(searchPhoto);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  const onSelectChange = (newOption: DropdownOption) => {
    setColumn(newOption);
  };

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    loadPhotos();
  }, [query, page]);

  if (!photos) {
    return null;
  }

  return (
    <div>
      <div className={classes.select__container}>
        <div className={classes.select__content}>
          <Select
            selectedOption={column}
            options={COUNT_OPTIONS}
            onChange={onSelectChange}
          />
        </div>
      </div>
      <Gallery
        photos={photos.result}
        column={column}
      />
      <Pagination
        currentPage={page}
        onChange={onPageChange}
      />
    </div>
  );
};

export default SearchPage;
