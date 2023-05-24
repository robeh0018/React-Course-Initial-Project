import {Product} from "../interfaces/interfaces";

const product1: Product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
};

const product2: Product = {
    id: '2',
    title: 'Coffee Mug2 - Card',
    img: './coffee-mug2.png'
};

export const products: Product[] = [ product1, product2 ];