import { ADD_ITEM, REMOVE_ITEM } from './actions';

const getInitialState = () => ({
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    total: parseFloat(localStorage.getItem('cartTotal')) || 0,
});

const reducers = (state = getInitialState(), action) => {
    switch (action.type) {
        case ADD_ITEM: {
            const { productName, price } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.productName === productName);

            const updatedItems = existingItemIndex !== -1
                ? state.items.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
                : [...state.items, { productName, price, quantity: 1 }];

            const total = state.total + price;
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            localStorage.setItem('cartTotal', total.toString());

            return { ...state, items: updatedItems, total };
        }

        case REMOVE_ITEM: {
            const productNameToRemove = action.payload;
            const newItems = state.items.filter(item => item.productName !== productNameToRemove);
            const total = newItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

            localStorage.setItem('cartItems', JSON.stringify(newItems));
            localStorage.setItem('cartTotal', total.toString());
            return { ...state, items: newItems, total };
        }

        default:
            return state;
    }
};

export default reducers;