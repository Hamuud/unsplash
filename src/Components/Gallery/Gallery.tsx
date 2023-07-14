import React from 'react';
import { Masonry } from '@mui/lab';
import { Link } from 'react-router-dom';
import classes from './Gallery.module.scss';
import { Photo } from '../../types/Photo';
import { DropdownOption } from '../../types/DropdownOption';
import ScrollToTop from '../shared/ScrollToTop/ScrollToTop';

type Props = {
  photos: Photo[];
  column: DropdownOption;
  isPhone?: boolean;
};

const Gallery: React.FC<Props> = ({ photos, column, isPhone }) => {
  return (
    <div className={classes.gallery}>
      {isPhone ? (
        <Masonry
          defaultColumns={1}
          columns={1}
          spacing={1}
        >
          {photos?.map((photo) => (
            <Link
              to={`/photos/${photo.slug}`}
              key={photo.slug}
              className={classes.container}
              onClick={ScrollToTop}
            >
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className={classes.gallery__img}
              />
            </Link>
          ))}
        </Masonry>
      ) : (
        <Masonry
          columns={column.value}
          spacing={1}
        >
          {photos?.map((photo) => (
            <Link
              to={`/photos/${photo.slug}`}
              key={photo.slug}
              className={classes.container}
              onClick={ScrollToTop}
            >
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className={classes.gallery__img}
              />
            </Link>
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default Gallery;
