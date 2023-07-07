import { photo } from '../utils/fetchPhotos';
import { Photo } from '../types/Photo';

const access = 'A0HW69BTG2A3ATGz32VP3wAK_X8JsVygQhRA5ZTcVIE';
const photoLink = `photos?client_id=${access}`;

export const getImagesByPage = (numPage: number) => {
  return photo.get<Photo[]>(`${photoLink}&page=${numPage}`);
};

export const getImage = (slug: string) => {
  return photo.get<Photo>(`${slug}/?client_id=${access}`);
};

export const getImagesByPageAndSearch = (query: string, numPage: number) => {
  return photo.get<Photo[]>(`${photoLink}&query=${query}&count=30&page=${numPage}`);
};
