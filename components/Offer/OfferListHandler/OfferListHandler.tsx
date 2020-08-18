import React from 'react';
import OfferList from '../OfferList/OfferList';
import { useGetOffers } from '../../../shared/api/offer/getOffers/getOffers';
import Spinner from '../../UI/Spinner/Spinner';
import ServerErrors from '../../UI/ServerErrors/ServerErrors';

const OfferListHandler: React.FC = () => {

  const {
    data,
    loading,
    errors,
  } = useGetOffers({});

  let offerListDisplay;

  if (loading) {
    offerListDisplay = <Spinner />;
  } else if (errors) {
    offerListDisplay = (
      <ServerErrors errors={errors} />
    );
  } else {
    if (data?.getOffers && data?.getOffers.length) {
      offerListDisplay = <OfferList offers={data.getOffers} />;
    } else {
      offerListDisplay = <p>Il n'y a pas d'annonces actuellement avec ces critères.</p>;
    }
  }

  return (
    <>
      {offerListDisplay}
    </>
  );
}

export default OfferListHandler;
