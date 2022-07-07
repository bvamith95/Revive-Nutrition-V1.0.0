import { Routes, Route } from 'react-router';
import CatagoriesPreview from '../../components/categories-preview/catagories-preview.component';
import Category from '../category/category.component';
import ShopFilter from '../../components/shop-filter/shop-filter-component';



import './shop.component.styles.scss';



const Shop = ()=> {

  return (
    
    <div className="page_container">
      <div className="shop_container"> 
      <ShopFilter/>
        <Routes>
          <Route index element={<CatagoriesPreview />} />
          <Route path=':goal' element={<Category/>} />
        </Routes>


        
      </div>
    </div>

    );
  };  

  export default Shop;



