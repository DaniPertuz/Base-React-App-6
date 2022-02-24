import { CSSProperties, useContext } from 'react';

import Styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface TitleProps {
    className?: string;
    title?: string;
    style?: CSSProperties;
}

const ProductTitle = ({ title, className, style }: TitleProps) => {

    const { product } = useContext(ProductContext);

    return (
        <span
            className={`${Styles.productDescription} ${className}`}
            style={style}
        >
            {title ? title : product.title}
        </span>
    );
}

export default ProductTitle;