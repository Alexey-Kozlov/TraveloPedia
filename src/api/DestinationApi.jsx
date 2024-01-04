import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const DestinationApi = createApi({
    "reducerPath": "apiDestination",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5001/"}),
    tagTypes: ["Destinations"],
    endpoints: (builder) =>({
        GetAllDestination: builder.query({
            query: () => ({
                url: "destination",
                method: "GET",
                params: {}
            }),
            transformResponse:(res) => res.sort((a,b) => a.id - b.id),
            providesTags: ["Destinations"]
        }),
        AddDestination: builder.mutation({
            query:(destinationParam) =>({
                url: "destination",
                method:"POST",
                body: destinationParam
            }),
            invalidatesTags: ["Destinations"]
        }),
        UpdateDestination: builder.mutation({
            query:(destinationParam) =>({
                url: `destination/${destinationParam.id}`,
                method:"PUT",
                body: destinationParam
            }),
            invalidatesTags: ["Destinations"]
        }),
        DeleteDestination: builder.mutation({
            query:({id}) =>({
                url: `destination/${id}`,
                method:"DELETE",
                body: id
            }),
            invalidatesTags: ["Destinations"]
        })
    })
})

export const { 
    useGetAllDestinationQuery, 
    useAddDestinationMutation,
    useUpdateDestinationMutation, 
    useDeleteDestinationMutation 
} = DestinationApi