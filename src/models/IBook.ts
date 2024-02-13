interface IImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface IVolumeInfo {
  title: string;
  categories: string[];
  authors: string[];
  imageLinks: IImageLinks;
}

export interface IBook {
  etag: string;
  id: string;
  selfLink: string;
  volumeInfo: IVolumeInfo;
}
