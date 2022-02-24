import { useContext } from 'react';

import Styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

const ProductTitle = ({ title }: { title: string; }) => {

    const { product } = useContext(ProductContext);

    return (
        <span className={Styles.productDescription}>{title ? title : product.title}</span>
    );
}

export default ProductTitle;