import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://risk-management-2wxc.onrender.com/api";

export const toStandingApi = createApi({
  reducerPath: "standing",
  tagTypes: ["Standing"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    createGroup: builder.mutation<any, any>({
      query: (user) => ({
        url: "/group/createGroup",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Standing"],
    }),

    uploadRisk: builder.mutation<any, any>({
      query: (user) => ({
        url: "/user/upload",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Standing"],
    }),

    joinGroup: builder.mutation<any, any>({
      query: ({ user, id }) => ({
        url: `/group/join/${id}`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Standing"],
    }),

    comment: builder.mutation<any, any>({
      query: ({ user, id }) => ({
        url: `/group/comment/${id}`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Standing"],
    }),

    likeComment: builder.mutation<any, any>({
      query: ({ user, id }) => ({
        url: `/group/comment/like/${id}`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Standing"],
    }),
  }),
});

export const {
  useCommentMutation,
  useCreateGroupMutation,
  useJoinGroupMutation,
  useLikeCommentMutation,
  useUploadRiskMutation,
} = toStandingApi;
