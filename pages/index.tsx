import Layout from '../layout/Layout';
import Button from '../components/UI/Button/Button';
import Title from '../components/UI/Title/Title';
import React from 'react';
import Icon from '../components/Icon/Icon';

const IndexPage = () => (
  <Layout
    title="Site du don"
    description="Site de dons d'objets. Offrez les objets qui vous encombrent et récupérez gratuitement ceux des autres">

    <p>
      Short styleguide
      todo: move this
    </p>

    <Icon icon="Test" />
    <Icon icon="Test" color="primary" size="big" />
    <Icon icon="Test" color="secondary" size="extra" />

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis eum incidunt quos. Animi deleniti dolore
      minima molestias placeat, quam sed totam? Consequatur est minima minus omnis, repellat rerum tenetur!</p>

    <Title type="h1" style="title1">Title 1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi et eveniet
      nemo sequi? A accusantium amet deserunt enim impedit inventore, laboriosam libero minus necessitatibus nobis non
      odio saepe voluptates. Illum.</Title>
    <Title type="h3" style="title2" margin="big">Title 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Adipisci debitis eaque illum non porro recusandae ullam? Assumenda consequuntur dolores dolorum eius enim
      exercitationem harum, nulla quis quos soluta veritatis voluptate.</Title>
    <Title type="h3" style="title3" margin="extra">Title 3</Title>

    <Button type="a">Button main</Button>
    <Button type="button" style="alt">Button alt</Button>
  </Layout>
)

export default IndexPage;
