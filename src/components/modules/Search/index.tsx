import { FlexBox } from '@ui5/webcomponents-react'
import { useAppDispatch } from '../../../hooks'
import { addSearch } from '../../../store/slices/search/search-slice'
import './styles.scss'

interface SearchProps {
  isFetching: boolean
}

export function Search({ isFetching }: SearchProps) {
  const dispatch = useAppDispatch()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmitSearch(event: any) {
    event.preventDefault()

    dispatch(
      addSearch({
        id: event.target.id.value,
        plot: event.target.plot.value,
        title: event.target.search.value,
        type: event.target.type.value,
        year: event.target.year.value
      })
    )
  }

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
          <select placeholder="Full" id="plot">
            <option value="short">Short</option>
            <option value="full">Full</option>
          </select>
        </label>

        <button type="submit" disabled={isFetching}>
          Search
        </button>
      </FlexBox>
    </form>
  )
}
