import { FlexBox } from '@ui5/webcomponents-react'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../hooks'
import { addMovie, useFetchMovieByTitleQuery } from '../../../store/slices/search/search-slice'
import './styles.scss'

export function Search() {
  const [search, setSearch] = useState({
    id: '',
    plot: '',
    title: '',
    type: '',
    year: ''
  })

  const dispatch = useAppDispatch()

  const { data } = useFetchMovieByTitleQuery(search)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmitSearch(event: any) {
    event.preventDefault()

    setSearch({
      id: event.target.id.value,
      plot: event.target.plot.value,
      title: event.target.search.value,
      type: event.target.type.value,
      year: event.target.year.value
    })
  }

  useEffect(() => {
    dispatch(addMovie(data))
  }, [data, dispatch])

  return (
    <form onSubmit={handleSubmitSearch} className="search-form">
      <FlexBox
        alignItems="Center"
        justifyContent="SpaceBetween"
        wrap="Wrap"
        className="search-container"
      >
        <label htmlFor="search">
          Title:
          <input id="search" placeholder="e.g. The Social Network" className="input" />
        </label>

        <label htmlFor="year">
          Year:
          <input id="year" placeholder="e.g. 2010" className="input" />
        </label>

        <label htmlFor="id">
          A valid IMDb ID :
          <input id="id" placeholder="e.g. tt1285016" className="input" />
        </label>

        <label htmlFor="type">
          Type:
          <select placeholder="Movie" id="type">
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
        </label>

        <label htmlFor="plot">
          Plot:
          <select placeholder="Long" id="plot">
            <option value="short">Short</option>
            <option value="long">Long</option>
          </select>
        </label>

        <button type="submit">Search</button>
      </FlexBox>
    </form>
  )
}
