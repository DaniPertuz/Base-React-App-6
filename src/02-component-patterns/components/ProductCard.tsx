import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import Styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

// interface ProductButtonsProps {
//     counter: number;
//     increase: (value: number) => void;
// }

const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increase } = useProduct();

    return (
        <Provider
            value={{
                counter,
                increase,
                product
            }}
        >
            <div className={Styles.productCard}>
                {children}
                {/* <ProductImage img={product.img} />
                <ProductTitle title={product.title} />
                <ProductButtons counter={counter} increase={increase} /> */}
            </div>
        </Provider>
    );
}

// ProductCard.Image = ProductImage;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;

export default ProductCard;