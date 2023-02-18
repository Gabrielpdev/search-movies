import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Rating {
  Source: string
  Value: string
}

export type SearchState =
  | {
      Error: string
      Title: string
      Year: string
      Rated: string
      Released: string
      Runtime: string
      Genre: string
      Director: string
      Writer: string
      Actors: string
      Plot: string
      Language: string
      Country: string
      Awards: string
      Poster: string
      Ratings: Rating[]
      Metascore: string
      imdbRating: string
      imdbVotes: string
      imdbID: string
      Type: string
      totalSeasons: string
      Response: string
    }
  | undefined

interface queryType {
  title: string
  plot: string
  type: string
  id: string
  year: string
}

interface IInitialState {
  movie: SearchState
}

export const searchApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL
  }),
  endpoints: (builder) => ({
    fetchMovieByTitle: builder.query<SearchState, queryType>({
      query(body: queryType) {
        const { title, plot, type, id, year } = body

        return `/?t=${title}&i=${id}&y=${year}&apikey=${process.env.REACT_APP_API_KEY}&plot=${plot}&type=${type}`
      }
    })
  })
})

const initialState: IInitialState = {
  movie: undefined
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<SearchState>) {
      state.movie = action.payload
    }
  }
})

export const { useFetchMovieByTitleQuery } = searchApiSlice

export const { addMovie } = searchSlice.actions
export default searchSlice.reducer
