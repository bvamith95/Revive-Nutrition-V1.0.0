import { Link } from 'react-router-dom';

import { useContext} from 'react';
import { GoalsContext } from '../../contexts/goals.context';

import ShopFilterItem from '../shop-filter-link/shop-filter-item.component';

import  './shop-filter.styles.scss';

const ShopFilter = ()=> {
    const {goalsMap} = useContext(GoalsContext);

    return (
        <div className='shop_filter_container'>
        <h2>Goals</h2>
          <Link className='filter-link' to="/shop">
          <h3>
          Shop All
          </h3>
          </Link>
          {Object.keys(goalsMap).map((key) => { 
            const products = goalsMap[key];
            return (<ShopFilterItem key={key} title={products[0].goalMeta} link={key}  />);
          })} 

        </div>
    )
}

export default ShopFilter; 