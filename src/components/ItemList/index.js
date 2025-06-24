import { connect } from 'react-redux';
import { removeItem } from '../../store/actions';
import './style.css';

function ItemList({ cartItems, removeItem, totalPrice }) {
    const isEmpty = cartItems.length === 0;

    return (
        <div>
            <h2>Order details</h2>
            <div>
                {isEmpty ? (
                    <p>Order is empty! Please add some items!</p>
                ) : (
                    <>
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.productName} className="cart-item">
                                    <span>{item.productName} - {item.quantity} x ${item.price.toFixed(2)} = ${(item.quantity * item.price).toFixed(2)}</span>
                                    <button className="remove-button" onClick={() => removeItem(item.productName)}>X</button>
                                </li>
                            ))}
                        </ul>
                        <p className='total-price'>Total price: ${totalPrice.toFixed(2)}</p>
                    </>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: state.items,
    totalPrice: state.total,
});

const mapDispatchToProps = (dispatch) => ({
    removeItem: (productName) => dispatch(removeItem(productName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);