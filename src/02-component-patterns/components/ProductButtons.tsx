import { CSSProperties, useContext } from 'react';

import { ProductContext } from './ProductCard';
import Styles from '../styles/styles.module.css';

export interface ButtonsProps {
    className?: string;
    style?: CSSProperties;
}

const ProductButtons = ({ className, style }: ButtonsProps) => {

    const { increase, counter } = useContext(ProductContext);

    return (
        <div
            className={`${Styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button className={Styles.buttonMinus} onClick={() => increase(-1)}>-</button>

            <div className={Styles.countLabel}>{counter}</div>

            <button className={Styles.buttonAdd} onClick={() => increase(+1)}>+</button>
        </div>
    );
}

export default ProductButtons;