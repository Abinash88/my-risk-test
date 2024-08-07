import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://risk-management-2wxc.onrender.com/api"

export const userApi = createApi({
    reducerPath: "user",
    tagTypes: ["User"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,


    }),
    endpoints: (builder) => ({
        getUsersRequests: builder.mutation<any, any>({
            query: (user) => ({
                url: "/admin/getUsers",
                method: "GET",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),

        approveUsers: builder.mutation<any, any>({
            query: ({user, id}) => ({
                url: `/admin/approve/${id}`,
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),

        getAllUsers: builder.mutation<any, any>({
            query: (user) => ({
                url: "/admin/users",
                method: "GET",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),

        deleteUsers: builder.mutation<any, any>({
            query: ({user, id}) => ({
                url: `/admin/users/${id}`,
                method: "DELETE",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),

        getRiskProfiles: builder.mutation<any, any>({
            query: (user ) => ({
                url: "/admin/riskProfiles",
                method: "GET",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),

        deletRiskProfile: builder.mutation<any, any>({
            query: ({ user, id }) => ({
                url: `/admin/riskProfiles/${id}`,
                method: "DELETE",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),

        getgroups: builder.mutation<any, any>({
            query: ({ user }) => ({
                url: "/admin/groups",
                method: "GET",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),

        deleteGroups: builder.mutation<any, any>({
            query: ({ user, id }) => ({
                url: `/admin/groups/${id}`,
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),



    }),
});

export const {
    useApproveUsersMutation,
    useDeletRiskProfileMutation,
    useDeleteUsersMutation,
    useGetAllUsersMutation,
    useGetRiskProfilesMutation,
    useGetUsersRequestsMutation,
    


} = userApi;