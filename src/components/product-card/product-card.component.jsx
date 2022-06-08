import './product-card.styles.scss';

const ProductCard = ( {product}) => {
    const {imageUrl, title, description, price} = product;
    return ( 

        <div className="product-card" >
          <div 
          className="product-card__img" 
          style={{
            backgroundImage:`url(${imageUrl})`
          }}/>
          <div className="product-card__body">
            <h3 className="product-card__name">
            {title}
            </h3>
            <p className="product-card__text">
            {description}
            </p>

            <div className="product-card__details" >
              <p className="product-card__details--price">Rs.{price}</p>
              <div className="product-card__details--btn">ADD TO CART</div>
            </div>

          </div>
        </div>
        
    )

}

export default ProductCard;