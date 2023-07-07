/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Search from '../../Components/Search/Search';
import Select from '../../Components/shared/Select/Select';
import classes from './Home.module.scss';
import { Photo } from '../../types/Photo';
import { getImagesByPage } from '../../api/photo.api';
import Gallery from '../../Components/Gallery';
import { DropdownOption } from '../../types/DropdownOption';
import Pagination from '../../Components/Pagination/Pagination';

const Home = () => {
  const COUNT_OPTIONS = [
    { value: 3, label: '3' },
    { value: 5, label: '5' },
  ];

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedOption, setSelectedOption] = useState(COUNT_OPTIONS[0]);
  const [page, setPage] = useState(1);

  const onSelectChange = (newOption: DropdownOption) => {
    setSelectedOption(newOption);
  };

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  const loadPhotos = async () => {
    try {
      const imageFromServer = await getImagesByPage(page);

      setPhotos(imageFromServer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPhotos();
  }, [page]);

  return (
    <div>
      <Search />
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
        column={selectedOption}
        photos={photos}
      />
      <Pagination
        currentPage={page}
        onChange={onPageChange}
      />
    </div>
  );
};

export default Home;
