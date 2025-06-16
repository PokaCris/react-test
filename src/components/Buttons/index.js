
const Buttons = ({productName, addProduct}) => {

    return (
        <button className="product-button" onClick={() => addProduct(productName)}>{productName}</button>
    )

}

export default Buttons;