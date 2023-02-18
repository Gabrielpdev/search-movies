import React, { useState } from 'react'
import { FlexBox } from '@ui5/webcomponents-react'
import { Header } from '../../components/modules/Header'
import { Footer } from '../../components/modules/Footer'
import { Movie } from '../../components/modules/Movie'
import { Empty } from '../../components/modules/Empty'

import './styles.scss'
import { useAppSelector } from '../../hooks'
import { Search } from '../../components/modules/Search'

export function App() {
  const movie = useAppSelector((state) => state.movie.movie)

  return (
    <div className="wrapper">
      <Header />

      <Search />

      <FlexBox alignItems="Start" justifyContent="Start" className="container">
        {movie?.Error ? <Empty /> : <Movie />}
      </FlexBox>
      <Footer />
      <div className="image" />
    </div>
  )
}
