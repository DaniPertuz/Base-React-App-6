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
    maxCount?: number;
    product: Product;
    increase: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Image: (Props: ImageProps) => JSX.Element;
    Title: (Props: TitleProps) => JSX.Element;
    Buttons: (Props: ButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCard extends Product {
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}