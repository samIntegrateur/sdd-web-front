import Layout from '../layout/Layout';

import React from 'react';
import ConnexionForm from '../components/Authentification/ConnexionForm/ConnexionForm';

const ConnexionPage = () => (
  <Layout
    title="Site du don"
    description="Site de dons d'objets. Offrez les objets qui vous encombrent et récupérez gratuitement ceux des autres">

    <ConnexionForm />

  </Layout>
)

export default ConnexionPage;
