import React, {useContext} from 'react';
import Container from '../Container/Container';
import classes from './Header.module.css';
import Link from 'next/link';
import SvgSiteDuDon from '../../components/Svg/SiteDuDon';
import { useLogin } from '../../shared/api/user/login/login';
import { logout } from '../../shared/api/user/logout/logout';

const Header: React.FC = () => {

  const { data, loading, errors } = useLogin({ email: 'sam@gmail.com', password: '111111'});

  const loginHandler = () => {
    // const response = await login('samuel.desbos@gmail.com', '111111');

  };

  const logoutHandler = async () => {
    // const response = await logout();
    // console.log('response', response);
  };

  const registerHandler = () => {

  };

  let loginDisplay;

  if (loading) {
    loginDisplay = <span>loading...</span>;
  } else if (errors && errors.message) {
    console.log('errors', errors);
    loginDisplay = <span>{errors.message}</span>
  } else if (data && data.login) {
    loginDisplay = <span>{data.login.user.username}</span>
  }

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
          { loginDisplay }

        </div>
      </Container>
    </header>
  );
};

export default Header;

