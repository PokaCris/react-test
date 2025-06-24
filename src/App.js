import hamburger from './assets/bg.png';
import cheeseburger from './assets/bg2.png';
import fries from './assets/potato.png';
import coffe from './assets/coffe.png';
import tea from './assets/tea.png';
import cola from './assets/cola.png';
import './App.css';

import { useDispatch } from 'react-redux';
import { addItem } from './store/actions';
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
};

function App() {
  const dispatch = useDispatch();

  const handleAddProduct = (productName) => {
    dispatch(addItem(productName, ProductItems[productName]?.price || 0));
  };

  return (
    <div className='main'>
      <Header />
      <div className='container'>
        <div className='content'>
          <ItemList />
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