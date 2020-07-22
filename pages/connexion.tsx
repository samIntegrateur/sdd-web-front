import Layout from '../layout/Layout';

import React from 'react';
import ConnexionForm from '../components/Authentification/ConnexionForm/ConnexionForm';
import Section from '../layout/Section/Section';

const ConnexionPage = () => (
  <Layout
    title="Connexion - Site du don"
    description="Connexion - Site du don">

    <Section containerSmall>
      <ConnexionForm />
    </Section>

  </Layout>
)

export default ConnexionPage;
