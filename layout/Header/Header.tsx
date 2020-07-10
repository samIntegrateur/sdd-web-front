import React, {useContext} from 'react';
import Container from '../Container/Container';
import classes from './Header.module.css';
import Link from 'next/link';
import SvgSiteDuDon from '../../components/Svg/SiteDuDon';
import { login } from '../../shared/api/user/login/login';
import { logout } from '../../shared/api/user/logout/logout';

const Header: React.FC = () => {

  const loginHandler = async () => {
    const response = await login('samuel.desbos@gmail.com', '111111');
    console.log('response', response);
  };

  const logoutHandler = async () => {
    const response = await logout();
    console.log('response', response);
  };

  const registerHandler = () => {

  };

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

          <button type="button" onClick={loginHandler}>Login</button>
          <button type="button" onClick={logoutHandler}>Logout</button>
          <button type="button" onClick={registerHandler}>Register</button>

        </div>
      </Container>
    </header>
  );
};

export default Header;

