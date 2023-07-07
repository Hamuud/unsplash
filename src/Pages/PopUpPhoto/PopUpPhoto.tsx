/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getImage } from '../../api/photo.api';
import { Photo } from '../../types/Photo';
import classes from './PopUpPhoto.module.scss';
import ShareButton from '../../Components/shared/ShareButton/ShareButton';

const PopUpPhoto = () => {
  const { pathname } = useLocation();
  const [photo, setPhoto] = useState<Photo | null>(null);

  const loadPhoto = async () => {
    try {
      const photoFromServer = await getImage(pathname);

      setPhoto(photoFromServer);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    loadPhoto();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <div>
          <div className={classes.user__container}>
            <img 
              src={photo?.user.profile_image.small}
              alt="Profile avatar"
              className={classes.user__photo}
            />

            <div className={classes.user__info}>
              <h2 className={classes.user__name}>
                {photo?.user.name}
              </h2>

              <h3 className={classes.user__username}>
                {photo?.user.username}
              </h3>
            </div>
          </div>
        </div>

        <div className={classes.button}>
          <a
            className={classes.button__link}
            href={photo?.links.html}
            target="_blank"
          >
            Dowload free
          </a>
        </div>
      </div>

      <div className={classes.container__img}>
        <img
          src={photo?.urls.regular}
          alt={photo?.alt_description}
          className={classes.img}
        />
      </div>

      <div className={classes.bottom__info}>
        <div className={classes.bottom__info_stats}>
          <div className={classes.bottom__views}>
            <h2 className={classes.bottom__title}>
              Views
            </h2>

            <h3 className={classes.bottom__number}>
              {photo?.views}
            </h3>
          </div>

          <div className={classes.bottom__info_download}>
            <h2 className={classes.bottom__title}>
              Dowloads
            </h2>

            <h3 className={classes.bottom__number}>
              {photo?.downloads}
            </h3>
          </div>
          <div>
            {photo?.user.location && (
              <div>
                <h2 className={classes.bottom__title}>
                  Location
                </h2>
    
                <h3 className={classes.bottom__number}>
                  {photo?.user.location}
                </h3>
              </div>
            )}
          </div>
        </div>

        <div>
          <ShareButton 
            label='Share'
            url={window.location.href}
          />
        </div>
      </div>
    </div>
  );
};

export default PopUpPhoto;
