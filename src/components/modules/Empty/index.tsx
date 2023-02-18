import { FlexBox } from '@ui5/webcomponents-react'
import { useAppSelector } from '../../../hooks'
import './styles.scss'

interface EmptyProps {
  data?: {
    Error: string
    Response: string
  }
}

export function Empty({ data }: EmptyProps) {
  const search = useAppSelector((state) => state.movie.search)

  return (
    <FlexBox
      alignItems="Center"
      justifyContent="Center"
      direction="Column"
      className="empty-content"
    >
      <h3>{!search.title && !search.id ? 'No movie found' : data?.Error}</h3>
      <p>Please search a new movie.</p>
    </FlexBox>
  )
}
