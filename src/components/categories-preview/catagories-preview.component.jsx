
import { useContext } from 'react';
import { GoalsContext } from '../../contexts/goals.context';

import ProductContainer from '../product-container/product-container.component';

import './catagories-preview.styles.scss';

const CatagoriesPreview = ()=> {
  const {goalsMap} = useContext(GoalsContext);


  return (

        <div className="products_container">
        {Object.keys(goalsMap).map((key) => {
          const products = goalsMap[key];
          return (<ProductContainer key={key} title={key} products={products} />);
        })}
        </div>

    );
  };  

  export default CatagoriesPreview;
