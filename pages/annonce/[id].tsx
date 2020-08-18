import { Offer } from '../../shared/types/offer.type';
import React from 'react';
import Section from '../../layout/Section/Section';
import Title from '../../components/UI/Title/Title';
import Layout from '../../layout/Layout';
import { handleGraphQlQuery } from '../../shared/api/utils';
import OfferDetail from '../../components/Offer/OfferDetail/OfferDetail';

interface IndexProps {
  offer: Offer;
}
const Index: React.FC<IndexProps> = ({offer}) => {

  const dynamicTitle = `${offer.title} - Le site du don`;

  return (
    <Layout
      title={dynamicTitle}
      description={dynamicTitle}>

      <Section containerFull tag='header'>
        <Title type="h1" style="title1">{offer.title}</Title>
      </Section>

      <Section containerFull>
        <OfferDetail offer={offer} />
      </Section>

    </Layout>
  );
}

export async function getStaticPaths() {
  try {

    // Get the paths we want to pre-render based on posts id
    const query = {
      query: `
        {
          getOffers {
            id
          }
        }
      `
    };

    const queryResult = await handleGraphQlQuery<{ getOffers: Partial<Offer>[] }>(query);

    if (queryResult.errors || !queryResult.data || !queryResult.data.getOffers) {
      throw new Error('Fetching offers failed');
    }

    const paths = queryResult.data.getOffers.map(offer => ({
      params: { id: offer.id }
    }));

    // We'll pre-render only these paths at build time.
    return { paths, fallback: false };

  } catch (e) {
    return console.error(e);
  }
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: { id: string }}) {
  try {

    // Get the paths we want to pre-render based on posts id
    const query = {
      query: `
        {
          getOffer(id: "${params.id}") {
            id
            updatedAt
            title
            description
            status
            imageUrl
            author {
              username
            }
          }
        }
      `
    };

    const queryResult = await handleGraphQlQuery<{ getOffer: Offer }>(query);

    if (queryResult.errors || !queryResult.data || !queryResult.data.getOffer) {
      throw new Error('Fetching offers failed');
    }

    return { props: { offer: queryResult.data.getOffer }};

  } catch (e) {
    return console.error(e);
  }
}


export default Index;
