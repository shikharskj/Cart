import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [],
      loading: true
    }
    this.db = firebase.firestore();
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  componentDidMount(){
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then( (snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map( (doc) => {
    //       console.log(doc.data());
    //     });

    //     const products = snapshot.docs.map( (doc) => {
    //       const data =  doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     });
    //     this.setState({
    //       products,
    //       loading: false
    //     })
    //   } )

    this.db
      .collection('products')
      // .where('price', '<='  ,1299)
      // .where('title', '==', 'Mouse')
      // .orderBy('price', 'desc')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map( (doc) => {
          console.log(doc.data());
        });

        const products = snapshot.docs.map( (doc) => {
          const data =  doc.data();
          data['id'] = doc.id;
          return data;
        });
        this.setState({
          products,
          loading: false
        })
      })

  }

  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then( () => {
        console.log("Document Updated Successfully");
      })
      .catch( (err) => {
        console.log("Error: ", err);
      })

  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    const docRef = this.db.collection('products').doc(products[index].id);

    if (products[index].qty === 0) {
      return;
    }

    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then( () => {
        console.log("Document Updated Successfully");
      })
      .catch( (err) => {
        console.log("Error: ", err);
      })

    // products[index].qty -= 1;

    // this.setState({
    //   products
    // })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    // const items = products.filter((item) => item.id !== id); // [{}]

    // this.setState({
    //   products: items
    // })

    const docRef = this.db.collection('products').doc(id);

    docRef
      .delete()
      .then( () => {
        console.log("Document Deleted Successfully");
      })
      .catch( (err) => {
        console.log("Error: ", err);
      })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;
    products.map((product) => {
      cartTotal += product.qty * product.price;
      return '';
    })

    return cartTotal;
  }

  addProduct = () => {
    this.db
      .collection('products')
      .add( {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5c3DqpZ5CrwCDgzmnoK_mhwJXULo8If4rg&usqp=CAU',
        price: 7741,
        qty: 3,
        title: "Washing Machine"
      })
      .then( (docRef) => {
        console.log("Product has been added ", docRef);
      }).catch( (err) => {
        console.log("Error:  ", err);
      })
  }

  render () {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct} 
        />
        {loading && <h1 style = { { marginLeft: 225} }>Loading Products...</h1>}
        <div style = { { marginLeft: 225, fontSize: 20, padding: 10 } }>
          {/* <button onClick= {this.addProduct} style= { {padding:20, fontSize:20} } >Add a Product</button> */}
          <div><b>TOTAL:</b> { this.getCartTotal() } </div>
        </div>
      </div>
    );
  }
}

export default App;
