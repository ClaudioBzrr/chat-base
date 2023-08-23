import { IAutogen } from './Autogen';

export type IMessage = IAutogen & {
  text: string;
  senderId: string;
  receiverId: string;
  roomId: string;
};
