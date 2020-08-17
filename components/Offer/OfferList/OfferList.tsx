import React from 'react';
import { Offer } from '../../../shared/types/offer.type';
import classes from './OfferList.module.css';
import OfferPreview from '../OfferPreview/OfferPreview';

interface OfferListProps {
  offers: Offer[];
}

const OfferList: React.FC<OfferListProps> = ({offers}) => {

  return (
    <ul className={classes.offerList}>
      {offers.map(offer => (
        <li key={offer.id} className={classes.offerList__item}>
          <OfferPreview offer={offer} />
        </li>
      ))}
    </ul>
  );
}

export default OfferList;
