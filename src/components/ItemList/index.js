function ItemList({ cartItems }) {
    const isEmpty = Object.keys(cartItems).length === 0;

    return (
        <div>
            {isEmpty ? (
                <p>Empty list</p>
            ) : (
                <ul>
                    {Object.entries(cartItems).map(([productName, quantity]) => (
                        <li key={productName}>
                            {productName} - {quantity}
                        </li>))

                    }
                </ul>)}
        </div>
    )

}

export default ItemList
