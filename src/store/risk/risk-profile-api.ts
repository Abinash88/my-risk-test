import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://risk-management-2wxc.onrender.com/api"

export const userApi = createApi({
    reducerPath: "user",
    tagTypes: ["User"],
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
            invalidatesTags: ["User"],
        }),

        downloadRiak: builder.mutation<any, any>({
            query: ({user, id}) => ({
                url: `/user/download/${id}`,
                method: "GET",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),

    }),
});

export const {
    useGenerateRsikMutation,
    useDownloadRiakMutation

} = userApi;