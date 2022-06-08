import { useContext } from 'react';

import { ProductsContext } from '../../context/products.context';


import ProductContainer from '../../components/product-container/product-container.component';
import ShopFilter from '../../components/shop-filter/shop-filter-component';
import './shop.component.styles.scss';

const Shop = ()=> {
  const {products} = useContext(ProductsContext);

  return (
    <div className="page_container">
      <div className="shop_container"> 
        <ShopFilter />
        <ProductContainer products={products}/>
      </div>
    </div>

    );
  };  

  export default Shop;