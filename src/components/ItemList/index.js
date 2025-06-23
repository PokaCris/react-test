import './style.css';

function ItemList({ cartItems, removeProduct, totalPrice }) {
    const isEmpty = Object.keys(cartItems).length === 0;

    return (
        <div>
            <h2>Order details</h2>
            <div>
                {isEmpty ? (
                    <p>Order is empty! Please add some items!</p>
                ) : (
                    <>
                        <ul>
                            {Object.entries(cartItems).map(([productName, item]) => (
                                <li key={productName} className="cart-item">
                                    <span>{productName} - {item.quantity} x ${item.price.toFixed(2)} = ${(item.quantity * item.price).toFixed(2)}</span>
                                    <button className="remove-button" onClick={() => removeProduct(productName)}>X</button>
                                </li>
                            ))}
                        </ul>
                        <p className='total-price'>Total price: ${totalPrice}</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default ItemList;