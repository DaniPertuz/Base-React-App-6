import { CSSProperties, useCallback, useContext } from 'react';

import { ProductContext } from './ProductCard';
import Styles from '../styles/styles.module.css';

export interface ButtonsProps {
    className?: string;
    style?: CSSProperties;
}

const ProductButtons = ({ className, style }: ButtonsProps) => {

    const { increase, counter, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount]
    );

    return (
        <div
            className={`${Styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button className={Styles.buttonMinus} onClick={() => increase(-1)}>-</button>

            <div className={Styles.countLabel}>{counter}</div>

            <button className={`${Styles.buttonAdd} ${isMaxReached() && Styles.disabled}`} onClick={() => increase(+1)}>+</button>
        </div>
    );
}

export default ProductButtons;