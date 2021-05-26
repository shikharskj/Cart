import React from 'react';
// import CartItem from './CartItem';

const Navbar = (props) => {

    return(
        
        <div style= { styles.nav } >
           <h1>CART</h1>
            <div style= { styles.cartIconContainer } >
                
                <img style = { styles.cartIcon } src="https://pics.freeicons.io/uploads/icons/png/6635486791578982984-512.png" alt="cart-icon" />    
                <span style= { styles.cartCount } > { props.count } </span>
            </div>    
        </div>
    );
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      paddingLeft: 20,
      paddingRight: 20,
      marginLeft: 150,
      marginRight: 150,
      height: 70,
      background: 'rgb(47,3,177)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
};
  
export default Navbar; 