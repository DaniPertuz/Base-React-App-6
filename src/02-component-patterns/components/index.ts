import { default as ProductCardHOC } from './ProductCard';
import ProductButtons from './ProductButtons';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButtons
});

export { ProductImage, ProductTitle, ProductButtons };

export default ProductCard;