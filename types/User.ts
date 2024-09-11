export interface NewUser {
  login: string;
  email: string;
  fio: string;
  number: string;
  password: string;
  isAdmin?: boolean;
}
