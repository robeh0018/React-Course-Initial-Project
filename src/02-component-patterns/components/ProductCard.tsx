import { createContext, CSSProperties, ReactElement } from "react";
// @ts-ignore
import styles from '../styles/styles.module.css';
// @ts-ignore
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';
import { onChangeArgs, Product, ProductContextProps } from "../interfaces/interfaces";


export interface Props {
    className?: string,
    style?: CSSProperties,
    product: Product,
    children?: ReactElement | ReactElement[],
    onChange?:  ( args: onChangeArgs ) => void;
    value?: number,
}

export const ProductContext = createContext({} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ( { children, product, className, style, onChange, value }: Props ) => {

   const { counter, increaseBy } = useProduct( { onChange, product, value } );

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>

            <div
                className={ `${ styles.productCard } ${ className }`}
                style={ style }
            >
                { children }
            </div>

        </Provider>
    );
};
