import { createContext } from "react";
// @ts-ignore
import styles from '../styles/styles.module.css';
// @ts-ignore
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Props } from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ( { children, product }: Props ) => {

   const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>

            <div className={ styles.productCard }>
                { children }
            </div>

        </Provider>
    );
};
