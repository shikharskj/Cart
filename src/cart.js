import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor () {
        super();
        this.state = {
            products: [
                {
                    price: 1999,
                    title: 'Watch',
                    qty: 7,
                    img: '',
                    id: 1
                },
                {
                    price: 12999,
                    title: 'Smart Phone',
                    qty: 3,
                    img: '',
                    id: 2
                },
                {
                    price: 52999,
                    title: 'Laptop',
                    qty: 2,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    render(){
        const {products} = this.state;
        return(

            <div className = "cart">
                
                {products.map((product) => {
                    return(
                        <CartItem 
                          product={product} 
                          key={product.id} 
                          
                        />
                    )
                })}
                
            </div>

        );
    }
}




export default Cart; 