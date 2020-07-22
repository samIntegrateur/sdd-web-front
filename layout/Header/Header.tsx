import React, {useContext} from 'react';
import Container from '../Container/Container';
import classes from './Header.module.css';
import Link from 'next/link';
import SvgSiteDuDon from '../../components/UI/Svg/SiteDuDon';
import { AuthContext } from '../../providers/Auth';
import { useLogout } from '../../shared/api/user/logout/logout';
import Nav from '../Nav/Nav';

const Header: React.FC = () => {



  return (
    <header className={classes.header}>
      <Container full smallPaddingY>
        <div className={classes.header__row}>
          <div className={classes.header__logo}>
            <Link href="/">
              <a className={classes.header__logoLink}>
                <SvgSiteDuDon className={classes.header__logoSvg} />
              </a>
            </Link>
          </div>

          <div className={classes.header__nav}>
            <Nav />
          </div>

        </div>
      </Container>
    </header>
  );
};

export default Header;

