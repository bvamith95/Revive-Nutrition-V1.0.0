import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component'



import './product-container.styles.scss';

    
const ProductContainer = ({ title, products })=>{

return (
    
    <div className="products-container--container">
          <div className='product-title-container'>
          <span>
          <Link className='title' to={title} >{title.toUpperCase()}</Link>
          </span>
          </div>


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