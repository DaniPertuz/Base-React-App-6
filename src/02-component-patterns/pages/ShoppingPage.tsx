import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';

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
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={'Hola mundo'} />
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={product.title} />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    );
}

export default ShoppingPage;