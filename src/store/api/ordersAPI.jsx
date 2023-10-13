import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ordersApi = createApi({
    reducerPath: "orders",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    endpoints(builder) {
        return {
            fetchOrder: builder.query({
                query: (id) => {
                    return {
                        url: `/orders/${id}`,
                        method: "GET",
                    };
                },
            }),
            createOrder: builder.mutation({
                query: (data) => {
                    return {
                        url: "/create-orders",
                        method: "POST",
                        body: data,
                    };
                },
            }),
        };
    },
});

export const { useFetchOrderQuery, useCreateOrderMutation } = ordersApi;
export { ordersApi };
