import {CSSProperties, useContext} from 'react';
import { ProductContext } from './ProductCard';

//@ts-ignore
import styles from "../styles/styles.module.css";

export interface Props {
    className?:string,
    style?: CSSProperties,
}

// Para modificar cada elemento con style por ejemplo los botones habría que añadir
// nuevas props like buttonsStyle for example.

export const ProductButtons = ( { className, style }: Props ) => {

    const { counter, increaseBy } = useContext( ProductContext );

    return (
        <div
            className={ `${ styles.buttonsContainer } ${ className }` }
            style={ style }
        >

            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }
            >
                -
            </button>

            <div className={ styles.countLabel }> { counter } </div>

            <button
                className={ styles.buttonAdd }
                onClick={ () => increaseBy( 1 ) }
            >
                +
            </button>

        </div>
    )
};