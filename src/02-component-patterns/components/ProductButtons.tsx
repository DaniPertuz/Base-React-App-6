import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import Styles from '../styles/styles.module.css';

const ProductButtons = () => {

    const { increase, counter } = useContext(ProductContext);

    return (
        <div className={Styles.buttonsContainer}>
            <button className={Styles.buttonMinus} onClick={() => increase(-1)}>-</button>

            <div className={Styles.countLabel}>{counter}</div>

            <button className={Styles.buttonAdd} onClick={() => increase(+1)}>+</button>
        </div>
    );
}

export default ProductButtons;