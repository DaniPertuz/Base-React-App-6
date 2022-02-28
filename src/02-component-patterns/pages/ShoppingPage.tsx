import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';

const ShoppingPage = () => {

    const { products, shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (
                        <ProductCard
                            product={product}
                            className='bg-dark text-white text-bold'
                            key={product.id}
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-white text-bold' title={'Hola mundo'} />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className='bg-dark text-white text-bold'
                            style={{
                                width: '100px'
                            }}
                            onChange={onProductCountChange}
                            value={product.count}
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons
                                className='custom-buttons'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
                {/* <ProductCard
                    product={product1}
                    className='bg-dark text-white text-bold'
                    style={{
                        width: '100px'
                    }}
                >
                    <ProductImage className='custom-image' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard> */}
            </div>
        </div>
    );
}

export default ShoppingPage;