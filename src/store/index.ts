import { configureStore } from '@reduxjs/toolkit'
import { searchApiSlice } from './slices/search/search-slice'
import searchSlice from './slices/search/search-slice'
import favoriteReducer from './slices/favorite/favorite-slice'

export const store = configureStore({
  reducer: {
    [searchApiSlice.reducerPath]: searchApiSlice.reducer,
    favorite: favoriteReducer,
    movie: searchSlice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(searchApiSlice.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
