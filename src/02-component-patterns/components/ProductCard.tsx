import { createContext, CSSProperties, ReactElement } from "react";
// @ts-ignore
import styles from '../styles/styles.module.css';
// @ts-ignore
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';
import {InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps} from "../interfaces/interfaces";


export interface Props {
    className?: string;
    style?: CSSProperties;
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: ( args: ProductCardHandlers ) => JSX.Element;
    onChange?:  ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ( { children, product, className, style, onChange, value, initialValues }: Props ) => {

   const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct( { onChange, product, value, initialValues } );

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount,
        }}>

            <div
                className={ `${ styles.productCard } ${ className }`}
                style={ style }
            >
                {
                    children( {
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,

                        increaseBy,
                        reset,
                    })
                }
            </div>

        </Provider>
    );
};
