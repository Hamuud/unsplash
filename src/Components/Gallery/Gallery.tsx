import React from 'react';
import { Masonry } from '@mui/lab';
import classes from './Gallery.module.scss';
import { Photo } from '../../types/Photo';
import { DropdownOption } from '../../types/DropdownOption';

type Props = {
  photos: Photo[];
  column: DropdownOption;
};

const Gallery: React.FC<Props> = ({ photos, column }) => {
  return (
    <div className={classes.gallery}>
      <Masonry columns={column.value} spacing={2}>
        {photos.map((photo) => (
          <img
            key={photo.slug}
            src={photo.urls.regular}
            alt={photo.alt_description}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
