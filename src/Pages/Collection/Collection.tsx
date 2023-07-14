import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
// import { SearchType } from '../../types/SearchType';
import { DropdownOption } from '../../types/DropdownOption';
import { getImagesByPageAndSearch } from '../../api/photo.api';
import classes from './Collection.module.scss';
import Select from '../../Components/shared/Select/Select';
import Gallery from '../../Components/Gallery/Gallery';
import Pagination from '../../Components/Pagination/Pagination';
import { SearchType } from '../../types/SearchType';

const COUNT_OPTIONS = [
  { value: 3, label: '3' },
  { value: 5, label: '5' },
];

const Collection = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [photos, setPhotos] = useState<SearchType | null>(null);
  const [selectedOption, setSelectedOption] = useState(COUNT_OPTIONS[0]);
  const [page, setPage] = useState(1);
  const collectionName = pathname.split('/').pop() || '';

  const onSelectChange = (newOption: DropdownOption) => {
    setSelectedOption(newOption);
  };

  const divRef = useRef(null);

  const onPageChange = (newPage: number) => {
    if (divRef) {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    setPage(newPage);
  };

  const [isPhone, setIsPhone] = useState(false);

  const loadPhotos = async () => {
    try {
      const searchPhotos = await getImagesByPageAndSearch(collectionName, page);

      setPhotos(searchPhotos);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    loadPhotos();
  }, [query, page]);

  if (!photos) {
    return null;
  }

  return (
    <div className={classes.container}>
      <div ref={divRef}>
        <div className={classes.select__container}>
          <div className={classes.select__content}>
            <Select
              selectedOption={selectedOption}
              options={COUNT_OPTIONS}
              onChange={onSelectChange}
            />
          </div>
        </div>
        <Gallery
          isPhone={isPhone}
          column={selectedOption}
          photos={photos.results}
        />
        <Pagination
          currentPage={page}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Collection;
