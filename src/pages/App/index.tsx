import { FlexBox } from '@ui5/webcomponents-react'
import { Header } from '../../components/modules/Header'
import { Footer } from '../../components/modules/Footer'
import { Movie } from '../../components/modules/Movie'
import { Empty } from '../../components/modules/Empty'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Search } from '../../components/modules/Search'
import {
  addMovie,
  addSearch,
  useFetchMovieByTitleQuery
} from '../../store/slices/search/search-slice'
import { Loading } from '../../components/modules/Loading'
import { useEffect } from 'react'
import { Button } from '../../components/elements/Button'

export function App() {
  const search = useAppSelector((state) => state.movie.search)
  const dispatch = useAppDispatch()

  const { data, isFetching } = useFetchMovieByTitleQuery(search)

  function handleResetMovie() {
    dispatch(addMovie(undefined))
    dispatch(
      addSearch({
        id: '',
        plot: '',
        title: '',
        type: '',
        year: ''
      })
    )
  }

  useEffect(() => {
    dispatch(addMovie(data))
  }, [data, dispatch])

  return (
    <FlexBox alignItems="Start" justifyContent="Start" direction="Column" className="wrapper">
      <Header />

      <Search isFetching={isFetching} />

      <FlexBox alignItems="Start" justifyContent="Start" className="container" direction="Column">
        {data?.Title && (
          <Button
            onClick={handleResetMovie}
            className="reset-button"
            icon="decline"
            design="Attention"
          />
        )}

        {isFetching ? <Loading /> : !data?.Title ? <Empty data={data} /> : <Movie />}
      </FlexBox>
      <Footer />
      <div className="image" />
    </FlexBox>
  )
}
