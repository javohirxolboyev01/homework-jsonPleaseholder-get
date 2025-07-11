export interface IPosts {
  id: number;
  title: string;
  userId: number;
  body: string;
}

export interface ICommets {
  id: number;
  name: string;
  body: string;
  email: string;
}
export interface IAlbums {
  id: number;
  title: string;
  userId: number;
}
export interface IPhotos {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}
export interface ITodos {
  id: number;
  title: string;
  userId: number;
}
export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  phone: string;
}
export interface Wish{
}
