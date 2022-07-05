import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component'



import './product-container.styles.scss';

    
const ProductContainer = ({ title, products })=>{

return (
    
    <div className="products-container--container">

          <h2>
          <Link className='title' to={title} >{title.toUpperCase()}</Link>
          </h2>

          <div className='products-container--products'>
          {products
            .filter((_, idx) => idx < 3)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

          </div>

  </div>
 );
};

export default ProductContainer;