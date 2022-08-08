import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component'



import './product-container.styles.scss';

    
const ProductContainer = ({ title, products })=>{

return (
    
    <div className="products-container--container">

          <div className='products-container--products'>
          {products
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

          </div>

  </div>
 );
};

export default ProductContainer;