import './style.css';

const Buttons = ({ productName, price, addProduct, children }) => {
    return (
        <button className="product-button" onClick={() => addProduct(productName, price)}>
            {children}
            <br />
            ${price.toFixed(2)}
        </button>
    );
};

export default Buttons;