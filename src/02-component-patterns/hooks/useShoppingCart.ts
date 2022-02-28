import { useState } from 'react';
import { ProductInCard, Product } from '../interfaces/interfaces';
import { products } from '../data/products';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCard }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(oldShoppingCart => {
            const productInCard: ProductInCard = oldShoppingCart[product.id] || { ...product, count: 0 };

            if (Math.max(productInCard.count + count, 0) > 0) {
                productInCard.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCard
                };
            }

            // Borrar el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;

            return rest;

            /*if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;

                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }*/
        });
    }

    return {
        products,
        shoppingCart,
        onProductCountChange
    }
}