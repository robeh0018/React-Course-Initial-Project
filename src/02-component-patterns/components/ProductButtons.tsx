import {CSSProperties, useCallback, useContext} from 'react';
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

    const { counter, increaseBy, maxCount } = useContext( ProductContext );

    const isMaxReached = useCallback( () => {
        return counter === maxCount;
    }, [ counter, maxCount ] );

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
                disabled={ isMaxReached() }
                className={ `${ styles.buttonAdd } ${ isMaxReached() && styles.disabled }` }
                onClick={ () => increaseBy( 1 ) }
            >
                +
            </button>

        </div>
    )
};