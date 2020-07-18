import Layout from '../layout/Layout';
import React from 'react';
import withAuth from '../hoc/withAuth';

const Testage = () => {

  return (
    <Layout
      title="Site du don"
      description="Site de dons d'objets. Offrez les objets qui vous encombrent et récupérez gratuitement ceux des autres">

      <p>
        Si tu vois ceci tu dois être connecté
      </p>

    </Layout>
  );
}

export default withAuth(Testage);
