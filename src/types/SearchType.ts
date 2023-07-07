import { Photo } from './Photo';

export interface SearchType {
  total: number;
  total_pages: number;
  result: Photo[];
};
