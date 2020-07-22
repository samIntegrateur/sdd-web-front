import Layout from '../layout/Layout';

import React from 'react';
import Section from '../layout/Section/Section';
import InscriptionForm from '../components/Authentification/InscriptionForm/InscriptionForm';

const InscriptionPage = () => (
  <Layout
    title="Inscription - Site du don"
    description="Inscription - Site du don">

    <Section containerSmall>
      <InscriptionForm />
    </Section>

  </Layout>
)

export default InscriptionPage;
