import './App.css';
import { useState } from 'react';
import Buttons from './components/Buttons';
import ItemList from './components/ItemList';
import Header from './components/Header';
import Footer from './components/Footer';
import burger from './assets/bg.png'
import burger2 from './assets/bg2.png'
import fri from './assets/potate.png'
import coffe from './assets/kofe.png'
import tea from './assets/tea.png'
import cola from  './assets/cola.png'


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
    <div className='app-main'>
      <Header />
      <div className='app-container'>

        <div className='content-container'>
          <ItemList cartItems={cartItems} />

          <button className='clear-button' onClick={handleClearCart}>
            Clear
          </button>

        </div>

        <div className='product-buttons'>
          <img src={burger} alt='1' />
          <Buttons productName="Hamburger" addProduct={handleAddProduct} />
          <img src={burger2} alt='2' />
          <Buttons productName="Cheeseburger" addProduct={handleAddProduct} />
          <img src={burger2} alt='2' />
          <Buttons productName="Fries" addProduct={handleAddProduct} />
          <img src={burger2} alt='2' />
          <Buttons productName="Coffee" addProduct={handleAddProduct} />
          <img src={burger2} alt='2' />
          <Buttons productName="Tea" addProduct={handleAddProduct} />
          <img src={burger2} alt='2' />
          <Buttons productName="Cola" addProduct={handleAddProduct} />
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default App;
