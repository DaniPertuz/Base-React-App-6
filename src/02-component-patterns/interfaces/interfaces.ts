import { Props as ProductCardProps } from '../components/ProductCard';
import { ButtonsProps } from '../components/ProductButtons';
import { ImageProps } from '../components/ProductImage';
import { TitleProps } from '../components/ProductTitle';

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increase: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Image: (Props: ImageProps) => JSX.Element;
    Title: (Props: TitleProps) => JSX.Element;
    Buttons: (Props: ButtonsProps) => JSX.Element;
}