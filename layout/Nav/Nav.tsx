import React, { useContext } from 'react';
import { AuthContext } from '../../providers/Auth';
import { useLogout } from '../../shared/api/user/logout/logout';
import Link from 'next/link';
import Icon from '../../components/UI/Icon/Icon';
import classes from './nav.module.css';
import { SvgNames } from '../../components/UI/Svg';


interface NavItem {
  label: string;
  icon: SvgNames;
  actionFn?: () => void;
  actionLink?: string;
}

const Nav: React.FC = () => {
  const { user } = useContext<AuthContext>(AuthContext);

  const { triggerQuery: triggerLogout } = useLogout({ autoTrigger: false });

  const navListNotLogged: NavItem[] = [
    {
      label: "S'inscrire",
      icon: "AddUser",
      actionLink: "inscription"
    },
    {
      label: "Se connecter",
      icon: "LogIn",
      actionLink: "connexion"
    }
  ];

  const navListLogged: NavItem[] = [
    {
      label: "Messages",
      icon: "ChatBubble",
      actionLink: "messages",
    },
    {
      label: "Mon compte",
      icon: "User",
      actionLink: "compte",
    },
    {
      label: "Se déconnecter",
      icon: "LogOut",
      actionFn: triggerLogout,
    }
  ];

  const navList: NavItem[] = user ? navListLogged : navListNotLogged;

  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__List}>
        {navList.map(item => (
          <li className={classes.nav__ListItem} key={item.label}>

            {item.actionLink ? (
              <Link href={item.actionLink}>
                <a className={classes.nav__Link}>
                  <Icon icon={item.icon} color='white' size='big' />
                  <span>{item.label}</span>
                </a>
              </Link>
            ) : item.actionFn ? (
              <button type="button" className={classes.nav__Link} onClick={item.actionFn}>
                <Icon icon={item.icon} color='white' size='big' />
                <span>{item.label}</span>
              </button>
            ) : ''}

          </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Nav;
