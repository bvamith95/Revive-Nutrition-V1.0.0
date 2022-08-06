import { useContext , useState, useEffect} from 'react';
import { useParams } from 'react-router';

import ProductCard from '../../components/product-card/product-card.component';

import { GoalsContext } from '../../contexts/goals.context';

import './category.styles.scss';

const Category = () => {
    const { goal} = useParams();
    const { goalsMap} =useContext(GoalsContext);
    const [products,setProducts] = useState(goalsMap[goal]);

    useEffect(()=> {
        setProducts(goalsMap[goal])
    }, [goal, goalsMap])

    return (
        <div className='category'>
        <h2 className='title'>{products[0].description.toUpperCase()}</h2>
            <div className='category-container'>
            {   products &&
                products.map((products)=>  <ProductCard key={products.id} product={products} />)
            }
            </div>
        </div>

    )
};

export default Category;