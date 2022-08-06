import React from "react";
import { Link } from 'react-router-dom';

import './shop-filter-item.styles.scss';

const ShopFilterItem = ({link, key, title})=> {
    return (
        
        <h3>
        <Link className='filter-link' key={key} to={link} >{title}</Link>
        </h3>

    )
}

export default ShopFilterItem;