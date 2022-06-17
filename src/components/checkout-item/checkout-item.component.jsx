import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';


const CheckoutItem = ({cartItem}) => {
    const { title, imageUrl, price, quantity,info} = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);

    const addItemHandler = () => addItemToCart(cartItem);

    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
          <div className='image-container'>
            <img src={imageUrl} alt={`${title}`} />
          </div>
          
          <div className='item-details'>
            <div className='item-details__name'>
            <span className='name'>{title}</span>
            <span className='info'>{info}</span>
            </div>

            <span className='quantity'>
              <div className='arrow' onClick={removeItemHandler}>
                &#10094;
              </div>
              <span className='value'>{quantity}</span>
              <div className='arrow' onClick={addItemHandler}>
                &#10095;
              </div>
            </span>

            <span className='price'>Rs. {price}</span>
           </div>

          <div className='remove-button' onClick={clearItemHandler}>
            &#10005;
          </div>
        </div>
      );
};

export default CheckoutItem;