import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, cartTotal, cartCount} = useContext(CartContext);
    return (
        <div className='checkout-page'>
                <div className="checkout-container">
                    <div className="checkout-header">
                        <h2>Your Cart</h2>
                    </div>
                {
                    cartItems.map ((cartItem)=>(
                            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                        )
                    )
                }
                <div className='sub-total-container'>
                <h3>Sub-Total </h3>
                <span className='quantity'>{cartCount}</span>
                <span className='total'>Rs. {cartTotal}</span>
                </div>


                </div>


                <div className='order-details-container'>
                    <h2>Order Details</h2>

                </div>

        </div>
        
    );
};

export default Checkout;