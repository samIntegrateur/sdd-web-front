import React from 'react';
import Layout from '../../layout/Layout';
import withAuth from '../../hoc/withAuth';
import Section from '../../layout/Section/Section';
import Title from '../../components/UI/Title/Title';
import Button from '../../components/UI/Button/Button';
import AccountTabs from '../../components/Account/AccountTabs/AccountTabs';

const Index: React.FC = () => {

  return (
    <Layout
      title="Mon compte - Le site du don"
      description="Mon compte - Le site du don">

      <Section containerFull tag='header'>
        <Title type="h1" style="title1">Mon compte</Title>
      </Section>

      <Section containerFull>

        <div className="part-big">
          <Button type="a" href="/creer-une-annonce">
            Créer une annonce
          </Button>
        </div>


        <AccountTabs />

      </Section>

    </Layout>
  );
}

export default withAuth(Index);
