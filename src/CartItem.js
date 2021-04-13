import React from 'react';

class CartItem extends React.Component {

    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Smart Phone',
            qty: 1,
            img: ''
        }
    }

    increaseQuantity =  () => {
        console.log(this.state);
    }

    render() {
        const { price, title, qty } = this.state;
        return(
            <div className = "cart-item">
                <div className = "left-block">
                    <img style = {styles.image} />
                </div>
                <div className = "right-block">
                    <div style = { {fontSize: 25} }> {title} </div>
                    <div style = { {color: '#777'} }>Price : {price} </div>
                    <div style = { {color: '#777'} }>Qty : {qty} </div>
                    <div className = "cart-item-actions">
                        {/* buttons */}
                        <img 
                            alt="increase" 
                            className = "action-icons" 
                            src = "https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1618214750~hmac=5de3f66124a1c7d5ddb9fb22d8341323"
                            onClick = { this.increaseQuantity }
                         />
                        <img 
                            alt="decrease" 
                            className = "action-icons" 
                            src = "https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1618214696~hmac=e1d6e888ee6a7a7464a64530e8668d3f" 

                        />
                        <img 
                            alt="delete" 
                            className = "action-icons" 
                            src = "https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1618214779~hmac=fa96b83aff40b6af4a618e8dfdcf2488" 
                            
                        />
                    </div>
                </div>
            </div>
        )
    }
}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem; 