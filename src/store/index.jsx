import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./api/productsAPI";
import { ordersApi } from "./api/ordersAPI";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
    cartReducer,
    addCart,
    updateQuantity,
    removeItem,
    addTotal,
    addAddress,
    clearState,
} from "./slices/cartSlice";

const cartPersistConfig = {
    key: "cart",
    storage,
};

const productsPersistConfig = {
    key: "products",
    storage,
};

const ordersPersistConfig = {
    key: "orders",
    storage,
};

const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer);
const productsPersistedReducer = persistReducer(
    productsPersistConfig,
    productsApi.reducer
);
const ordersPersistedReducer = persistReducer(
    ordersPersistConfig,
    ordersApi.reducer
);

export const store = configureStore({
    reducer: {
        // cart: cartReducer,
        // [productsApi.reducerPath]: productsApi.reducer,
        // [ordersApi.reducerPath]: ordersApi.reducer,
        cart: cartPersistedReducer,
        [productsApi.reducerPath]: productsPersistedReducer,
        [ordersApi.reducerPath]: ordersPersistedReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(productsApi.middleware)
            .concat(ordersApi.middleware);
    },
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export {
    addCart,
    updateQuantity,
    removeItem,
    addTotal,
    addAddress,
    clearState,
};
export {
    useFetchAllProductsQuery,
    useFetchProductQuery,
} from "./api/productsAPI";
export { useFetchOrderQuery, useCreateOrderMutation } from "./api/ordersAPI";
