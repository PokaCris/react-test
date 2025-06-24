import { ADD_ITEM, REMOVE_ITEM } from './actions';

const initialState = {
    items: [],
    total: 0,
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            const { productName, price } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.productName === productName);

            if (existingItemIndex !== -1) {
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1,
                };
                return {
                    ...state,
                    items: updatedItems,
                    total: state.total + price,
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { productName, price, quantity: 1 }], 
                    total: state.total + price, 
                };
            }
        }
        case REMOVE_ITEM: {
            const productNameToRemove = action.payload;
            const newItems = state.items.filter(item => item.productName !== productNameToRemove);

            return {
                ...state,
                items: newItems,
                total: newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
            };
        }
        default:
            return state;
    }
};

export default reducers;