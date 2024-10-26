import { BASE_URL } from "@/lib/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const BASE_URL = "https://risk-management-2wxc.onrender.com/api";
console.log(BASE_URL);
export const userApi = createApi({
  reducerPath: "user",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (user) => ({
        url: "/user/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),

    register: builder.mutation<object, { data?: object }>({
      query: (user) => ({
        url: "/user/register",
        method: "POST",
        body: user.data,
      }),
      invalidatesTags: ["User"],
    }),

    finishRegister: builder.mutation<object, { data?: object }>({
      query: (user) => ({
        url: "/user/finishRegistration",
        method: "POST",
        body: user?.data,
      }),
      invalidatesTags: ["User"],
    }),

    referalCode: builder.mutation<any, any>({
      query: (user) => ({
        url: "/referral/generate",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useFinishRegisterMutation,
  useReferalCodeMutation,
} = userApi;
