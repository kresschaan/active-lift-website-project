import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./api/productsAPI";
import { ordersApi } from "./api/ordersAPI";
import {
    cartReducer,
    addCart,
    updateQuantity,
    removeItem,
    addTotal,
    addAddress,
} from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(productsApi.middleware)
            .concat(ordersApi.middleware);
    },
});

setupListeners(store.dispatch);

export { addCart, updateQuantity, removeItem, addTotal, addAddress };
export {
    useFetchAllProductsQuery,
    useFetchProductQuery,
} from "./api/productsAPI";
export { useFetchOrderQuery, useCreateOrderMutation } from "./api/ordersAPI";
