import React from 'react';

const CartItem = (props) => {

    const { price, title, qty } = props.product;
    const { product, 
        onIncreaseQuantity, 
        onDecreaseQuantity, 
        onDeleteProduct
    } = props;
    return(
        <div className = "cart-item"> 
            <div className = "left-block">
                <img style = {styles.image} src = {product.img} />
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
                        src = "https://pics.freeicons.io/uploads/icons/png/3642717691543238914-512.png"
                        onClick = { () => onIncreaseQuantity(props.product) }
                        />
                    <img 
                        alt="decrease" 
                        className = "action-icons" 
                        src = "https://pics.freeicons.io/uploads/icons/png/18537612601543238905-512.png" 
                        onClick = { () => onDecreaseQuantity(props.product) }
                    />
                    <img 
                        alt="delete" 
                        className = "action-icons" 
                        src = "https://pics.freeicons.io/uploads/icons/png/14796741191530273515-512.png" 
                        onClick = { () => onDeleteProduct(product.id) }
                    />
                </div>
            </div>
        </div>
    );
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