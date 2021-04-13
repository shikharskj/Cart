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
        // console.log(this.state);
        // this.state.qty +=1;
        //setState form1  (use if prev state is not required)
        // this.setState({
        //     qty: this.state.qty +1
        // });

        //setState form2 (use if prev stateis required)
        this.setState((prevState) => {
            return {
                qty:prevState.qty + 1
            }
        })
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
                            src = "https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1618332061~hmac=ee16097273e869f0d8ce47f888121ea5"
                            onClick = { this.increaseQuantity }
                         />
                        <img 
                            alt="decrease" 
                            className = "action-icons" 
                            src = "https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1618332106~hmac=213becf7651f352e59de4c94628c3890" 

                        />
                        <img 
                            alt="delete" 
                            className = "action-icons" 
                            src = "https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1618332138~hmac=7a02f7accb6358b25a70fcbfee82470f" 

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