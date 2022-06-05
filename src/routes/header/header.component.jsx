import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';

import {ReactComponent as ReviveLogo } from '../../assests/revive.svg';
import {ReactComponent as AccountLogo} from '../../assests/account.svg';
import {ReactComponent as CartLogo} from '../../assests/cart.svg';

import './header.styles.scss';

const Header = ()=> {
    return (
      <Fragment>
        <div className="header">

        <div className='nav-links-container'>
          <Link className="nav-link" to='/shop'>
          Shop
          </Link>
          <Link className="nav-link" to='/consultation'>
          Take Consultation
          </Link>
        </div>

        <Link className="logo-container" to='/'>
            <ReviveLogo className="logo"/>
        </Link>

        <div className='user-links-container'>
            <Link className="nav-link" to='/sign-in'>
            Sign In
            </Link>

            <Link className="logo-container" to='/'>
              <AccountLogo className="logo"/>
            </Link>

            <Link className="logo-container" to='/'>
              <CartLogo className="logo"/>
            </Link>
              
          </div>

    
        </div>
        <Outlet/>
      </Fragment>
    )
  
  }

export default Header;