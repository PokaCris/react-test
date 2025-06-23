import hamburger from './assets/bg.png'
import cheeseburger from './assets/bg2.png'
import fries from './assets/potato.png'
import coffe from './assets/coffe.png'
import tea from './assets/tea.png'
import cola from './assets/cola.png'
import './App.css';

import { useState } from 'react';
import Buttons from './components/Buttons';
import ItemList from './components/ItemList';
import Header from './components/Header';
import Footer from './components/Footer';

const ProductItems = {
  "Hamburger": { price: 6 },
  "Cheeseburger": { price: 7 },
  "Fries": { price: 5 },
  "Coffee": { price: 3.5 },
  "Tea": { price: 1.5 },
  "Cola": { price: 2.5 },
}

function App() {
  const [cartItems, setCartItems] = useState({});

  const handleAddProduct = (productName) => {
    setCartItems((prevCartItems) => {
      if (prevCartItems[productName]) {
        return {
          ...prevCartItems,
          [productName]: {
            ...prevCartItems[productName],
            quantity: prevCartItems[productName].quantity + 1,
          },
        };
      } else {
        return {
          ...prevCartItems,
          [productName]: {
            quantity: 1,
            price: ProductItems[productName]?.price || 0,
          },
        };
      }
    });
  };

  const handleRemoveProduct = (productName) => {
    setCartItems((prevCartItems) => {
      const newCartItems = { ...prevCartItems };
      delete newCartItems[productName];
      return newCartItems;
    });
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (const productName in cartItems) {
      total += cartItems[productName].quantity * cartItems[productName].price;
    }
    return total.toFixed(2);
  };

  return (
    <div className='main'>
      <Header />
      <div className='container'>
        <div className='content'>
          <ItemList cartItems={cartItems} removeProduct={handleRemoveProduct} totalPrice={calculateTotalPrice()} />

        </div>
        <div className='product-buttons'>
          <h2>Add items</h2>
          <div>
            <Buttons productName="Hamburger" price={ProductItems["Hamburger"]?.price || 0} addProduct={handleAddProduct}>
              <img src={hamburger} alt="hamburger" />
              Hamburger
            </Buttons>
            <Buttons productName="Cola" price={ProductItems["Cola"]?.price || 0} addProduct={handleAddProduct}>
              <img src={cola} alt="cola" />
              Cola
            </Buttons>
            <Buttons productName="Cheeseburger" price={ProductItems["Cheeseburger"]?.price || 0} addProduct={handleAddProduct}>
              <img src={cheeseburger} alt="cheeseburger" />
              Cheeseburger
            </Buttons>
            <Buttons productName="Coffee" price={ProductItems["Coffee"]?.price || 0} addProduct={handleAddProduct}>
              <img src={coffe} alt="coffe" />
              Coffee
            </Buttons>
            <Buttons productName="Fries" price={ProductItems["Fries"]?.price || 0} addProduct={handleAddProduct}>
              <img src={fries} alt="fries" />
              Fries
            </Buttons>
            <Buttons productName="Tea" price={ProductItems["Tea"]?.price || 0} addProduct={handleAddProduct}>
              <img src={tea} alt="tea" />
              Tea
            </Buttons>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
