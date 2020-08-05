import React from 'react';
import withAuth from '../hoc/withAuth';
import Layout from '../layout/Layout';
import Section from '../layout/Section/Section';
import Title from '../components/UI/Title/Title';
import OfferForm from '../components/Offer/OfferForm/OfferForm';

const CreerUneAnnoncePage = () => (
  <Layout
    title="Créer une annonce - Site du don"
    description="Créer une annonce - Site du don">

    <Section containerSmall tag='header'>
      <Title type="h1" style="title1">Créer une annonce</Title>
    </Section>

    <Section containerSmall>
      <OfferForm />
    </Section>

  </Layout>
)

export default withAuth(CreerUneAnnoncePage);
