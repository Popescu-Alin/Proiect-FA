import e from "express";

interface IUser{
    id: number | undefined;
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
    role: string | undefined;
}

export class User implements IUser{
    id: number | undefined;
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
    role: string | undefined;

    constructor(data: IUser){
        if(data){
            this.id = data.id;
            this.username = data.username;
            this.email = data.email;
            this.password = data.password;
            this.role = data.role;
        }
    }
}

interface ILoginResponse{
    userName: string | undefined;
    email: string | undefined;
    role: string | undefined;
    id: number | undefined;
}

export class LoginResponse implements ILoginResponse{
    userName: string | undefined;
    email: string | undefined;
    role: string | undefined;
    id: number | undefined;

    constructor(data: LoginResponse){
        if(data){
            this.userName = data.userName;
            this.email = data.email;
            this.role = data.role;
            this.id = data.id;
        }
    }
}