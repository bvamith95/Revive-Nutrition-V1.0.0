import { Routes, Route } from 'react-router';
import CatagoriesPreview from '../../components/categories-preview/catagories-preview.component';
import Category from '../category/category.component';
import ShopFilter from '../../components/shop-filter/shop-filter-component';



import './shop.component.styles.scss';



const Shop = ()=> {

  return (
    
    <div className="page_container">
    <div className="shop-banner">
    <h2>Healthy products made just for you</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At enim malesuada in viverra integer senectus ipsum. Et ac elit viverra feugiat faucibus.</p>
  </div>
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



