import { Roles } from "../constants/constants";

interface ILoginDTO {
  username: string | undefined;
  password: string | undefined;
}

export class LoginDTO implements ILoginDTO {
  username: string | undefined;
  password: string | undefined;

  constructor(data: ILoginDTO) {
    if (data) {
      this.username = data.username;
      this.password = data.password;
    }
  }
}

interface IRegisterDTO {
  userName: string | undefined;
  email: string | undefined;
  password: string | undefined;
  role: Roles | undefined;
}

export class RegisterDTO implements IRegisterDTO {
  userName: string | undefined;
  email: string | undefined;
  password: string | undefined;
  role: Roles | undefined;

  constructor(data: IRegisterDTO) {
    if (data) {
      this.userName = data.userName;
      this.email = data.email;
      this.password = data.password;
      this.role = data.role;
    }
  }
}


