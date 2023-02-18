import { FlexBox } from '@ui5/webcomponents-react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
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

        {movie?.Plot !== 'N/A' && <p className="plot">{movie?.Plot}</p>}

        <div className="data">
          {movie?.Genre !== 'N/A' && (
            <p className="actors">
              <strong>Genre: </strong>
              {movie?.Genre}
            </p>
          )}

          {movie?.Language !== 'N/A' && (
            <p className="actors">
              <strong>Language: </strong>
              {movie?.Language}
            </p>
          )}

          {movie?.Country !== 'N/A' && (
            <p className="actors">
              <strong>Country: </strong>
              {movie?.Country}
            </p>
          )}

          {movie?.Writer !== 'N/A' && (
            <p className="actors">
              <strong>Writer: </strong>
              {movie?.Writer}
            </p>
          )}

          {movie?.Runtime !== 'N/A' && (
            <p className="actors">
              <strong>Runtime: </strong>
              {movie?.Runtime}
            </p>
          )}

          {movie?.Actors !== 'N/A' && (
            <p className="actors">
              <strong>Actors: </strong>
              {movie?.Actors}
            </p>
          )}

          {movie?.Released !== 'N/A' && (
            <p className="actors">
              <strong>Released: </strong>
              {movie?.Released}
            </p>
          )}

          {movie?.Year !== 'N/A' && (
            <p className="actors">
              <strong>Year: </strong>
              {movie?.Year}
            </p>
          )}

          {movie?.Awards !== 'N/A' && (
            <p className="actors">
              <strong>Awards: </strong>
              {movie?.Awards}
            </p>
          )}
        </div>

        {movie?.imdbRating !== 'N/A' && (
          <FlexBox alignItems="Center" justifyContent="Start" className="review">
            <strong>Review: </strong>
            {stars.map((_, index) => {
              if (review > index + 1) return <AiFillStar key={index} />

              return <AiOutlineStar key={index} />
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
