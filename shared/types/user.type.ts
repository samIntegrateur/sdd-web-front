import { Timestamps } from './timestamps.type';

export interface User extends Timestamps {
  id: string;
  username: string;
  email: string;
}
