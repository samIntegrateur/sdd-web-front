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
        <div className='section'>
          {container}
        </div>
      );
      break;
    case ('header'):
      sectionElement = (
        <header className='section'>
          {container}
        </header>
      );
      break;
    case ('footer'):
      sectionElement = (
        <footer className='section'>
          {container}
        </footer>
      );
      break;
    case ('article'):
      sectionElement = (
        <article className='section'>
          {container}
        </article>
      );
      break;
    case ('aside'):
      sectionElement = (
        <aside className='section'>
          {container}
        </aside>
      );
      break;
    default:
      sectionElement = (
        <section className='section'>
          {container}
        </section>
      );
  }

  return sectionElement;
}

export default Section;
