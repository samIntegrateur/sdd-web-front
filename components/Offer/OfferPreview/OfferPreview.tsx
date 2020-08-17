import React from 'react';
import { Offer } from '../../../shared/types/offer.type';
import classes from './OfferPreview.module.css';
import Title from '../../UI/Title/Title';
import Link from 'next/link';

interface OfferPreviewProps {
  offer: Offer;
}

const OfferPreview: React.FC<OfferPreviewProps> = ({ offer }) => {

  return (
    <Link href={`/annonce/[id]`} as={`/annonce/${offer.id}`}>
      <a title="Voir l'annonce" className={classes.offerPreview}>
        <article className={classes.offerPreview__wrapper}>
          <figure className={classes.offerPreview__figure}>
            <img src="https://picsum.photos/400/300" alt={offer.title} className={classes.offerPreview__img} />
            {/*{offer.thumbUrl*/}
            {/*  ? <img src={offer.thumbUrl} alt={offer.title} className={classes.offerPreview__img}  />*/}
            {/*  : ''}*/}
          </figure>
          <div className={classes.offerPreview__content}>
            <header className={classes.offerPreview__header}>
              <Title type="h2" style="title2" customClass={classes.offerPreview__title}>{offer.title}</Title>
            </header>
            <div className={classes.offerPreview__body}>
              {offer.updatedAt}
            </div>
          </div>
          <aside className={classes.offerPreview__author}>
            <figure className={classes.offerPreview__authorFigure}>
              <img src="https://picsum.photos/200/200" alt={offer.author.username} className={classes.offerPreview__authorImg} />
            </figure>
            <span className={classes.offerPreview__authorName}>
               {offer.author.username}
            </span>
          </aside>
        </article>
      </a>
    </Link>
  );
}

export default OfferPreview;
