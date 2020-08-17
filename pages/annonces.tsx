import Layout from '../layout/Layout';

import React from 'react';
import Section from '../layout/Section/Section';
import OfferListHandler from '../components/Offer/OfferListHandler/OfferListHandler';
import Title from '../components/UI/Title/Title';

// for now it's only client side,
// next we may do both (get static props for page load and client side calls for filter changes)
const AnnoncesPage = () => (
  <Layout
    title="Les annonces d'objets gratuits - Site du don"
    description="Toutes les annonces de dons proposés par nos généreux membres">

    <Section containerFull tag='header'>
      <Title type="h1" style="title1">Les dernières offres</Title>
    </Section>

    <Section containerFull>
      <OfferListHandler />
    </Section>

  </Layout>
)

export default AnnoncesPage;
