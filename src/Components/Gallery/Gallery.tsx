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
};

const Gallery: React.FC<Props> = ({ photos, column }) => {
  return (
    <div className={classes.gallery}>
      <Masonry columns={column.value} spacing={2}>
        {photos.map((photo) => (
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
    </div>
  );
};

export default Gallery;
