export interface User {
  id?: string;
  firstname?: string;
  lastName?: string;
  email: string;
  password: string;
}

export class UserModel implements User {
  id!: string;
  firstname!: string;
  lastName!: string;
  email!: string;
  password!: string;
}
