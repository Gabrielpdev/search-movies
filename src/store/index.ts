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

// import counterReducer from '../features/counter/counter-slice';
// import { apiSlice } from '../features/dogs/dogs-api-slice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     [apiSlice.reducerPath]: apiSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat(apiSlice.middleware);
//   },
// });

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
