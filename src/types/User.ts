export interface User {
  "id": string,
  "updated_at": string,
  "username": string,
  "name": string,
  "first_name": string,
  "last_name": string,
  "twitter_username": string,
  "portfolio_url": string,
  "bio": string,
  "location": string,
  "instagram_username": string,
  "total_collections": number,
  "total_likes": number,
  "total_photos": number,
  "profile_image": {
    "small": string,
    "medium": string,
    "large": string,
  }
  "links": {
    "self": string,
    "html": string,
    "photos": string,
    "likes": string,
    "portfolio": string,
  }
}