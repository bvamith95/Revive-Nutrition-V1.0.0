import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext, CartProvider } from '../../contexts/cart.context';

import {ReactComponent as ReviveLogo } from '../../assests/revive.svg';
import {ReactComponent as AccountLogo} from '../../assests/account.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils'
import './header.styles.scss';

const Header = ()=> {
  const {currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
  };


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

        {currentUser ? (
          <span className='nav-link' onClick={signOutHandler}>
            {' '}
            Sign Out{' '}
          </span>
        ) : (
          <Link className='nav-link' to='/auth'>
            Sign In
          </Link>
        )}
  
            <Link className="logo-container" to='/'>
              <AccountLogo className="logo"/>
            </Link>

            <CartIcon/>

              
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
        <Outlet/>
      </Fragment>
    )
  
  }

export default Header; 