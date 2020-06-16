import React, {useContext} from 'react';
import Container from '../Container/Container';
import classes from './Header.module.css';
import Link from 'next/link';
import SvgSiteDuDon from '../../components/Svg/SiteDuDon';


const Header: React.FC = () => {

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.header__row}>
          <div className={classes.header__logo}>
            <Link href="/">
              <a className={classes.header__logoLink}>
                <SvgSiteDuDon className={classes.header__logoSvg} />
              </a>
            </Link>
          </div>

          nav todo

        </div>
      </Container>
    </header>
  );
};

export default Header;

