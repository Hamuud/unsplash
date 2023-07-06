import { Links } from './Links';
import { Url } from './Url';
import { User } from './User';

export interface Photo {
  'id': string,
  'slug': string,
  'created_at': string,
  'updated_at': string,
  'promoted_at': string,
  'width': number,
  'height': number,
  'color': string,
  'blur_hash': string,
  'description': string,
  'alt_description': string,
  'urls': Url,
  'links': Links,
  'likes': number,
  'liked_by_user': boolean,
  'user': User,
  'views': number,
  'dowloads': number,
}
