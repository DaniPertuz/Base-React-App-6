import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import noImg from '../assets/no-image.jpg';
import Styles from '../styles/styles.module.css';

const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext);

    let imgToShow: string;
    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImg;
    }

    return (
        <img className={Styles.productImg} src={imgToShow} alt='No image' />
    );
}

export default ProductImage;