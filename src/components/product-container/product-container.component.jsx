import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component'



import './product-container.styles.scss';

    
const ProductContainer = ({ title, products })=>{

return (
    
    <div className="products-container--container">
          <div className='product-title-container'>
          <span>
          <Link className='title' to={title}>{products[0].title.toUpperCase()}</Link>
          
          </span>
          </div>


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