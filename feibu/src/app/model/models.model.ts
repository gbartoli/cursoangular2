export interface IUser {
    id: number;
    name: string;
    password: string;
    friends: number[];
}

export interface IPost{
    id: number;
    title: string;
    author: IUser;
    likes: number;
}

export class Post implements IPost{
    id: number = 0;
    title: string = "";
    author: IUser = new User();
    likes: number = 0;
}

export class User implements IUser{
    id: number;
    name: string;
    password: string;
    friends: number[];
}