import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import Button from '../../components/button/button.component';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, cartTotal, cartCount} = useContext(CartContext);
    const taxSubTotal = cartTotal * 0.18;
    const orderTotal = cartTotal + taxSubTotal; 
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
                <div className='cart-total-container'>
                <h3>Sub-Total </h3>
                <span className='quantity'>{cartCount}</span>
                <span className='total'>Rs. {cartTotal}</span>
                </div>


                </div>


                <div className='order-details-container'>
                    <div className='order-details-header'>
                     <h2>Order Details</h2>
                    </div>

                    <div className='sub-total-container'>
                        <div className='sub-total-item'>
                            <span>SUB TOTAL</span>
                            <span>Rs. {cartTotal}</span>
                        </div>

                        <div className='sub-total-item'>
                        <span>SHIPPING</span>
                        <span>FREE</span>
                        </div>

                        <div className='sub-total-item'>
                        <span>TAX - GST @ 18%</span>
                        <span>Rs. {taxSubTotal}</span>
                        </div>

                        <div className='sub-total-item'>
                        <span>DISCOUNT</span>
                        <span>-</span>
                        </div>
                    </div>

                    <div className='order-total-container'>
                    <h3>Total</h3>
                    <span className='total'>Rs. {orderTotal}</span>
                    </div>
                    <Button>Proceed to Pay →</Button> 

                </div>

        </div>
        
    );
};

export default Checkout;