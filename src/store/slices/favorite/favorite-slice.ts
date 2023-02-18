import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Rating {
  Source: string
  Value: string
}

const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites') ?? '[]')
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addMovieToFavorite(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload)

      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
    removeMovieToFavorite(state, action: PayloadAction<string>) {
      const filteredFavorites = state.favorites.filter(
        (favorite: string) => favorite !== action.payload
      )

      localStorage.setItem('favorites', JSON.stringify(filteredFavorites))

      state.favorites = filteredFavorites
    }
  }
})

export const { addMovieToFavorite, removeMovieToFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
