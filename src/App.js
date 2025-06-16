import './App.css';
import { useState } from 'react';
import Buttons from './components/Buttons';
import ItemList from './components/ItemList';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [cartItems, setCartItems] = useState({});

  const handleAddProduct = (productName) => {
    setCartItems((prevCartItems) => {
      if (prevCartItems[productName]) {
        return {
          ...prevCartItems,
          [productName]: prevCartItems[productName] + 1,
        }
      } else {
        return {
          ...prevCartItems,
          [productName]: 1,
        }
      }
    })
  }


  const handleClearCart = () => {
    setCartItems({});
  }

  return (
    <>
      <Header />
      <div className='app-container'>

        <div className='content-container'>
          <ItemList cartItems={cartItems} />

          <button className='clean-cart-button' onClick={handleClearCart}>
            Clear
          </button>

        </div>

        <div className='product-buttons'>
          <Buttons productName="Hamburger" addProduct={handleAddProduct} />
          <Buttons productName="Cheeseburger" addProduct={handleAddProduct} />
          <Buttons productName="Fries" addProduct={handleAddProduct} />
          <Buttons productName="Coffee" addProduct={handleAddProduct} />
          <Buttons productName="Tea" addProduct={handleAddProduct} />
          <Buttons productName="Cola" addProduct={handleAddProduct} />
        </div>

      </div>
      
      <Footer />
    </>
  );
}

export default App;
