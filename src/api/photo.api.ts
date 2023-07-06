import { photo } from '../utils/fetchPhotos';
import { Photo } from '../types/Photo';

const access = 'A0HW69BTG2A3ATGz32VP3wAK_X8JsVygQhRA5ZTcVIE';
const photoLink = `photos/random?client_id=${access}`;

export const getImages = () => {
  return photo.get<Photo[]>(`${photoLink}&count=10`);
};
