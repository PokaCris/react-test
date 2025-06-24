export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = (productName, price) => ({
    type: ADD_ITEM,
    payload: { productName, price },
});

export const removeItem = (productName) => ({
    type: REMOVE_ITEM,
    payload: productName,
});
