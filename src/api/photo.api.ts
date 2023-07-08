import { photo } from '../utils/fetchPhotos';
import { Photo } from '../types/Photo';
import { SearchType } from '../types/SearchType';

const access = '3pncTkuSqOQXl1jeguvX43dp7a_bU5PvPlS6Cg-8y_4';
const photoLink = `photos?client_id=${access}`;

export const getImagesByPage = (numPage: number) => {
  return photo.get<Photo[]>(`${photoLink}&page=${numPage}`);
};

export const getImage = (slug: string) => {
  return photo.get<Photo>(`${slug}/?client_id=${access}`);
};

export const getImagesByPageAndSearch = (query: string, numPage: number) => {
  return photo.get<SearchType>(`/search/${photoLink}&query=${query}&page=${numPage}`);
};
