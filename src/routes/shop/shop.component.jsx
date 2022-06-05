import ProductContainer from '../../components/product-container/product-container.component';
import ShopFilter from '../../components/shop-filter/shop-filter-component';
import './shop.component.styles.scss';

const Shop = ()=> {

  const products = [
    {
      id:1,
      title:'Multi-Vitamin',
      description:' Helps calcium absorption and also supports bone health and immune health.',
      price:'300',
      imageUrl: 'https://vitaminme.co.za/wp-content/uploads/2020/05/Hero-Image-1@2x.png'
    },
    {
      id:2,
      title:'Biotin',
      description:' Helps calcium absorption and also supports bone health and immune health.',
      price:'300',
      imageUrl: 'https://vitaminme.co.za/wp-content/uploads/2020/05/Hero-Image-2@2x.png'
    },
    {
      id:3,
      title:'Curcumin',
      description:' Helps calcium absorption and also supports bone health and immune health.',
      price:'300',
      imageUrl: 'https://vitaminme.co.za/wp-content/uploads/2021/09/Hero-Image-7@2x.png'
    },
    {
      id:4,
      title:'Iron + Folic Acid',
      description:'Helps calcium absorption and also supports bone health and immune health.',
      price:'300',
      imageUrl:'https://vitaminme.co.za/wp-content/uploads/2020/05/Hero-Image-6@2x.png'
    },
    {
      id:5,
      title:'Aswagandha',
      description:'Helps calcium absorption and also supports bone health and immune health.',
      price:'300',
      imageUrl:'https://vitaminme.co.za/wp-content/uploads/2020/05/DEBLOATING-DIGESTION-Image.png'
    },    {
      id:6,
      title:'Melatonin + Ginger',
      description:' Helps calcium absorption and also supports bone health and immune health.',
      price:'300',
      imageUrl:'https://vitaminme.co.za/wp-content/uploads/2021/09/Hero-Image-4@2x.png'
    }
  ]

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