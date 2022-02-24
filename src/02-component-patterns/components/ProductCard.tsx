import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';

import Styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

// interface ProductButtonsProps {
//     counter: number;
//     increase: (value: number) => void;
// }

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, increase } = useProduct();

    return (
        <Provider
            value={{
                counter,
                increase,
                product
            }}
        >
            <div
                className={`${Styles.productCard} ${className}`}
                style={style}
            >
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