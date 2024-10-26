import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://risk-management-2wxc.onrender.com/api"

export const riskApi = createApi({
    reducerPath: "risk",
    tagTypes: ["Risk"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,

    }),
    endpoints: (builder) => ({
        generateRsik: builder.mutation<any, any>({
            query: (user) => ({
                url: "/user/generateRisk",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["Risk"],
        }),

        downloadRiak: builder.mutation<any, any>({
            query: ({user, id}) => ({
                url: `/user/download/${id}`,
                method: "GET",
                body: user,
            }),
            invalidatesTags: ["Risk"],
        }),

    }),
});

export const {
    useGenerateRsikMutation,
    useDownloadRiakMutation

} = riskApi;