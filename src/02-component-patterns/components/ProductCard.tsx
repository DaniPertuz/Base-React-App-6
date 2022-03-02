import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import Styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

// interface ProductButtonsProps {
//     counter: number;
//     increase: (value: number) => void;
// }

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increase, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider
            value={{
                counter,
                increase,
                product,
                maxCount
            }}
        >
            <div
                className={`${Styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy: increase,
                    reset
                })}
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