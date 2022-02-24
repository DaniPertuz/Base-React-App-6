import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee mug - card',
    img: './coffee-mug.png'
};

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard
                    product={product}
                    className='bg-dark text-white text-bold'
                >
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-white text-bold' title={'Hola mundo'} />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
                </ProductCard>

                <ProductCard
                    product={product}
                    className='bg-dark text-white text-bold'
                >
                    <ProductCard.Image />
                    <ProductCard.Title title={product.title} />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>
            </div>
        </div>
    );
}

export default ShoppingPage;