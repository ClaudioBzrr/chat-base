import { IAutogen } from './Autogen';

export type IUser = IAutogen & {
  name: string;
  email: string;
  password: string;
};
