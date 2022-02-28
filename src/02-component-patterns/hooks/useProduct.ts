import { useEffect, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface UseProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: UseProductArgs) => {
    const [counter, setCounter] = useState(value);

    const increase = (value: number) => {

        const newValue = (Math.max(counter + value, 0));

        setCounter(newValue);

        // Esto es igual a
        // if (onChange) { onChange(); }
        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter(value);
    }, [value]);


    return { counter, increase };
}