import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://active-lift-server.onrender.com",
    }),
    endpoints(builder) {
        return {
            fetchAllProducts: builder.query({
                query: (product) => {
                    return {
                        url: "/products",
                        method: "GET",
                    };
                },
            }),
            fetchProduct: builder.query({
                query: (id) => {
                    return {
                        url: `/products/${id}`,
                        method: "GET",
                    };
                },
            }),
        };
    },
});

export const { useFetchAllProductsQuery, useFetchProductQuery } = productsApi;
export { productsApi };
