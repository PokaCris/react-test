import './style.css';

const Buttons = ({ productName, addProduct, children }) => {
    return (
        <button className="product-button" onClick={() => addProduct(productName)}>
            {children} 
        </button>
    );
};

export default Buttons;