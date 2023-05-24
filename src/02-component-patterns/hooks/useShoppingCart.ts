import {useState} from "react";
import {Product, ProductInCart} from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [ shoppingCart,  setShoppingCart ] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ( { count, product }: { count: number, product: Product } ) => {

        setShoppingCart( oldShoppingCard => {

            const productInCard: ProductInCart = oldShoppingCard[ product.id ] || { ...product, count: 0 };

            if ( Math.max( productInCard.count + count, 0 ) > 0 ) {
                productInCard.count += count;

                return {
                    ...oldShoppingCard,
                    [product.id]: productInCard,
                };
            }

            const { [product.id]: toDelete, ...rest } = oldShoppingCard;
            return { ...rest };

            // if ( count === 0 ){
            //
            //     const { [product.id]: toDelete, ...rest } = shoppingCart;
            //
            //     return {
            //         ...rest,
            //     };
            // }
            //
            // return {
            //     ...oldShoppingCard,
            //     [ product.id ]: { ...product, count },
            // }
        })

    };

    return {
        shoppingCart,

        onProductCountChange,
    };
};
