import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping store</h1>
            <hr />
            <ProductCard
                product={product}
                className='bg-dark text-white text-bold'
                key={product.id}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, increaseBy, count, maxCount, isMaxCountReached }) => (
                        <>
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-white text-bold' title={'Hola mundo'} />
                            <ProductButtons className='custom-buttons' />

                            <button onClick={reset}>Reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>
                            {
                                (!isMaxCountReached) &&
                                <button onClick={() => increaseBy(+2)}>+2</button>
                            }
                            <span>{count} - {maxCount}</span>
                        </>
                    )
                }
            </ProductCard>
        </div>
    );
}

export default ShoppingPage;