import ProductCard from '../product-card.component';
import './product-container.styles.scss';

    
const ProductContainer = ({products})=>{
    
return (
    
    <div className="shop_container__products">
    {products.map((product)=>(
      <ProductCard key={product.id} product={product}/>
      
    ))}  
    </div>
)
}

export default ProductContainer;