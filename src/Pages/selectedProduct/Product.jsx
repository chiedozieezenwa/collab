import { useGetProductsQuery } from '../../redux/ProductsApi';
import Navbar from "../../components/Navbar/Navbar"
import Topnav from "../../components/Topnav/Topnav"
import { useParams } from 'react-router-dom';
import design from './Product.module.css';
import rightIcon from '../../assets/right-icon.svg'

const Product = () => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams();

    const { data, error, isLoading } = useGetProductsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error fetching data</div>;
      }

    const product = data.products.find(product => product.id === parseInt(id));

    if (!product) {
      return <div>Product not found</div>;
    }

    return (
        <div>
            <Topnav />
            <Navbar />
            <div className={design.navigation}>
                <a href='/' className={design.home_text}>Home</a>
                <img src={rightIcon} alt="Right icon" />
                <h6 className={design.shop_text}>Shop</h6>
            </div>
            <div className={design.product__container}>
              <div className={design.product__container_gallery}>
                <div className={design.thumbnail}>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className={design.other_images}>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
              </div>
              <div className={design.product__container_details}>
                <h4>{product.title}</h4>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <p>{product.discountPercentage}% off</p>
              </div>
            </div>
        </div>
    )
}

export default Product;