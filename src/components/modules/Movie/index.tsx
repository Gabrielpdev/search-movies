import { FlexBox, Icon, Label } from '@ui5/webcomponents-react'
import './styles.scss'
import { Button } from '../../elements/Button'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import {
  addMovieToFavorite,
  removeMovieToFavorite
} from '../../../store/slices/favorite/favorite-slice'

const stars = Array.from({ length: 5 })

export function Movie() {
  const movie = useAppSelector((state) => state.movie.movie)
  const favorites = useAppSelector((state) => state.favorite.favorites)
  const dispatch = useAppDispatch()
  const review = movie?.imdbRating ? +movie?.imdbRating / 2 : 0

  const isFavorite = favorites.find((favorite: string) => favorite === movie?.Title)

  function handleFavorite() {
    if (isFavorite) {
      dispatch(removeMovieToFavorite(movie?.Title ?? ''))
      return
    }

    dispatch(addMovieToFavorite(movie?.Title ?? ''))
  }

  return (
    <FlexBox alignItems="Start" justifyContent="Start" className="movie-content">
      <img src={movie?.Poster} alt={movie?.Title} />

      <div>
        <h3 className="title">{movie?.Title}</h3>

        {movie?.Plot !== 'N/A' && (
          <Label wrappingType="Normal" className="plot">
            {movie?.Plot}
          </Label>
        )}

        <div className="data">
          {movie?.Genre !== 'N/A' && (
            <Label wrappingType="Normal" className="actors">
              <strong>Genre: </strong>
              {movie?.Genre}
            </Label>
          )}

          {movie?.Language !== 'N/A' && (
            <Label wrappingType="Normal" className="actors">
              <strong>Language: </strong>
              {movie?.Language}
            </Label>
          )}

          {movie?.Country !== 'N/A' && (
            <Label wrappingType="Normal" className="actors">
              <strong>Country: </strong>
              {movie?.Country}
            </Label>
          )}

          {movie?.Writer !== 'N/A' && (
            <Label wrappingType="Normal" className="actors">
              <strong>Writer: </strong>
              {movie?.Writer}
            </Label>
          )}

          {movie?.Runtime !== 'N/A' && (
            <Label wrappingType="Normal" className="actors">
              <strong>Runtime: </strong>
              {movie?.Runtime}
            </Label>
          )}

          {movie?.Actors !== 'N/A' && (
            <Label wrappingType="Normal" className="actors">
              <strong>Actors: </strong>
              {movie?.Actors}
            </Label>
          )}

          {movie?.Released !== 'N/A' && (
            <Label wrappingType="Normal" className="actors">
              <strong>Released: </strong>
              {movie?.Released}
            </Label>
          )}

          {movie?.Year !== 'N/A' && (
            <Label wrappingType="Normal" className="actors">
              <strong>Year: </strong>
              {movie?.Year}
            </Label>
          )}

          {movie?.Awards !== 'N/A' && (
            <Label wrappingType="Normal" className="actors">
              <strong>Awards: </strong>
              {movie?.Awards}
            </Label>
          )}
        </div>

        {movie?.imdbRating !== 'N/A' && (
          <FlexBox alignItems="Center" justifyContent="Start" className="review">
            <strong>Review: </strong>
            {stars.map((_, index) => {
              if (review > index + 1) return <Icon name="favorite" className="star" key={index} />

              return <Icon name="unfavorite" className="star" key={index} />
            })}
            {review}
          </FlexBox>
        )}

        <Button
          onClick={handleFavorite}
          iconEnd
          icon={isFavorite ? 'heart' : 'heart-2'}
          design="Negative"
          className="button"
        >
          Favorite
        </Button>
      </div>
    </FlexBox>
  )
}
