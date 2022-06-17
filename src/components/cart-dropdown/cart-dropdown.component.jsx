import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { CartContext } from '../../contexts/cart.context';


import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ()=> {
        const { cartItems, cartTotal,cartCount } = useContext(CartContext);
        const navigate = useNavigate();

        const gotToCheckoutHandler = () => {
            navigate ('/checkout')
        }

            return (
                <div className='cart-dropdown-container'>
                    <div className='cart-heading'>
                        <h2>A Cart Made For You</h2>
                    </div>

                    <div className='cart-items'>
                        {cartItems.map((item) => (
                            <CartItem key={item.id} cartItem={item}/>
                            ))}
                    </div>

                    <div className='cart-footer'>
                        <div className='cart-footer__details'>
                            <span className='quantity' >{cartCount} items</span>
                            <span  className='total'>Rs. {cartTotal}</span>
                        </div>
                         <Button onClick={gotToCheckoutHandler}>CHECKOUT</Button>
                    </div>

                </div>


            )
}

export default CartDropdown;