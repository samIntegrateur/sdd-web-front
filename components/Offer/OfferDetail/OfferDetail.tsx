import React from 'react';
import { Offer } from '../../../shared/types/offer.type';

interface OfferDetailProps {
  offer: Offer;
}

const OfferDetail: React.FC<OfferDetailProps> = ({ offer }) => {

  return (
    <p>
      {offer.description}
    </p>
  );
}

export default OfferDetail;
