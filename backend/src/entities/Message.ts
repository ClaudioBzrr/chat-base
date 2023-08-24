import { IAutogen } from './Autogen';

export type IMessage = IAutogen & {
  text: string;
  readed: boolean;
  senderId: string;
  receiverId: string;
  roomId: string;
};
