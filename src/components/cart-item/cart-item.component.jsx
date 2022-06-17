import './cart-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartItem = ({cartItem}) => {
    const { title,imageUrl, quantity, price, info} =  cartItem;
    const { clearItemFromCart } = useContext(CartContext);

    const clearItemHandler = ()=> clearItemFromCart(cartItem);

    return (
        <div className='cart-item-container'>
        <img src={imageUrl} alt={`${title}`} />
        <div className='item-details'>
            <div className='item-details__name'>
            <span className='name'>{title}</span>
            <span className='info'>{info}</span>
            </div>

            <span className='quantity'>{quantity}</span>
            <span className='price'>Rs. {price}</span>
            
        </div>
        <div className='remove-button' onClick={clearItemHandler}>
            &#10005;
        </div>
        </div>


    );
};

export default CartItem;