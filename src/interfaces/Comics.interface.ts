export default interface Comic {
  id: string;
  title: string;
  thumbnail: ComicThumbnail;
}

export interface ComicThumbnail {
  path: string;
  extension: string;
}
