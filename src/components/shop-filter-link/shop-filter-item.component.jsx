import React from "react";
import { Link } from 'react-router-dom';

import './shop-filter-item.styles.scss';

const ShopFilterItem = ({title})=> {

    return (
        
        <h3>
        <Link className='filter-link' to={title} >{title}</Link>
        </h3>

    )
}

export default ShopFilterItem;