import { CSSProperties, useContext } from 'react';

import { ProductContext } from './ProductCard';
import noImg from '../assets/no-image.jpg';
import Styles from '../styles/styles.module.css';

export interface ImageProps {
    img?: string;
    className?: string;
    style?: CSSProperties;
}

const ProductImage = ({ img, className, style }: ImageProps) => {

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
        <img
            className={`${Styles.productImg} ${className}`}
            src={imgToShow}
            alt='Product'
            style={style}
        />
    );
}

export default ProductImage;