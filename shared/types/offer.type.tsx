import { User } from './user.type';
import { Timestamps } from './timestamps.type';

export enum OfferStatus {
  AVAILABLE = 'AVAILABLE',
  PROMISED = 'PROMISED',
  GIVEN = 'GIVEN',
  CANCELED = 'CANCELED',
}

// todo: for previews make an OfferPreview or Partial<Offer> type ?
export interface Offer extends Timestamps {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  thumbUrl?: string;
  author: Partial<User>;
  status: OfferStatus;
}
