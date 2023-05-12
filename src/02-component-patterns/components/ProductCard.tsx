import {createContext, CSSProperties, ReactElement} from "react";
// @ts-ignore
import styles from '../styles/styles.module.css';
// @ts-ignore
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from "../interfaces/interfaces";


export interface Props {
    className?: string,
    style?: CSSProperties,
    product: Product,
    children?: ReactElement | ReactElement[],
}

export const ProductContext = createContext({} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ( { children, product, className, style }: Props ) => {

   const { counter, increaseBy } = useProduct();

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
