import React from 'react';
import Container from '../Container/Container';

type SectionTag = 'section' | 'div' | 'header' | 'footer' | 'article' | 'aside';

interface SectionProps {
  containerSmall?: boolean;
  containerFull?: boolean;
  tag?: SectionTag;
}

const Section: React.FC<SectionProps> = (
  {
    children,
    containerSmall,
    containerFull,
    tag = 'section',
  }
) => {

  const container = (
    <Container small={containerSmall} full={containerFull}>
      {children}
    </Container>
  );

  let sectionElement: JSX.Element;

  switch (tag) {
    case ('section'):
      sectionElement = (
        <section className='section'>
          {container}
        </section>
      );
      break;
    case ('div'):
      sectionElement = (
        <div>
          {container}
        </div>
      );
      break;
    case ('header'):
      sectionElement = (
        <header>
          {container}
        </header>
      );
      break;
    case ('footer'):
      sectionElement = (
        <footer>
          {container}
        </footer>
      );
      break;
    case ('article'):
      sectionElement = (
        <article>
          {container}
        </article>
      );
      break;
    case ('aside'):
      sectionElement = (
        <aside>
          {container}
        </aside>
      );
      break;
    default:
      sectionElement = (
        <section>
          {container}
        </section>
      );
  }

  return sectionElement;
}

export default Section;
