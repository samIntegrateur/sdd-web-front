import React, {useContext} from 'react';
import Container from '../Container/Container';
import classes from './Header.module.css';
import Link from 'next/link';
import SvgSiteDuDon from '../../components/Svg/SiteDuDon';
import { AuthContext } from '../../providers/Auth';
import { useLogout } from '../../shared/api/user/logout/logout';

const Header: React.FC = () => {

  const { user } = useContext<AuthContext>(AuthContext);

  const { triggerQuery: triggerLogout } = useLogout({ autoTrigger: false });

  let userDisplay;

  if (user) {
    userDisplay = (
      <>
        <span>Bonjour {user.username}</span><br />
       <button type="button" onClick={triggerLogout}>
         Déconnexion
       </button>
      </>
    );
  } else {
    userDisplay = (
      <>
        <Link href="/connexion"><a>Connexion</a></Link>
        <Link href="/inscription"><a>Inscription</a></Link>
      </>
    );
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

          <Link href="/testage">Testage</Link>
          { userDisplay }

        </div>
      </Container>
    </header>
  );
};

export default Header;

